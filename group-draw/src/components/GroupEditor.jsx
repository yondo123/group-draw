import { useEffect, useState } from 'react';
import { teams, continent, port } from '../static/constants';
import SelectBox from './Select';

const GroupEditor = function ({ drawList, insertTeam }) {
    const [teamList, setTeamList] = useState(teams);
    const [portList, setPortList] = useState(port);

    const [selectedContinent, setContinent] = useState('uefa');
    const [selectedTeam, setTeam] = useState('esp');
    const [selectedPort, setPort] = useState('1');

    //mounted
    useEffect(function () {}, []);

    /**
     * 대륙 변경
     * @param {string} value : 선택 대륙
     */
    const changeContinent = function (value) {
        setContinent(value);
    };

    /**
     * 팀 변경
     * @param {string} value : 선택 팀
     */
    const changeTeam = function (value) {
        setTeam(value);
    };

    /**
     *포트 변경
     * @param {string} value : 선택 포트
     */
    const changePort = function (value) {
        setPort(value);
    };

    /**
     * 팀 추가
     */
    const submit = function () {
        let teamInfo = {};
        teams.forEach(function (item) {
            if (item.code === selectedTeam) {
                teamInfo = item;
                return false;
            }
        });

        insertTeam({ ...teamInfo, selectedPort });
    };

    return (
        <div>
            <div className="">
                <SelectBox id={'continent'} label={'대륙'} selectList={continent} callback={changeContinent} />
            </div>
            <div className="">
                <SelectBox
                    id={'teamList'}
                    label={'국가'}
                    selectList={teamList.filter((item) => {
                        return selectedContinent === item.continent;
                    })}
                    callback={changeTeam}
                />
            </div>
            <div className="">
                <SelectBox id={'portList'} label={'포트'} selectList={portList} callback={changePort} />
            </div>
            <div>
                <button type="button" onClick={submit}>
                    리스트 추가
                </button>
            </div>
        </div>
    );
};
export default GroupEditor;
