import { useEffect, useState } from 'react';
import { teams, continent } from '../static/constants';
import SelectBox from './Select';

const GroupEditor = function ({ insertTeam }) {
    const [teamList, setTeamList] = useState(teams);
    const [selectedContinent, setContinent] = useState('uefa');
    const [selectedTeam, setTeam] = useState('esp');
    const [selectedPort, setPort] = useState('first');

    //mounted
    useEffect(function () {});

    /**
     * 대륙 변경
     * @param {string} value : 선택 대륙
     */
    const changeContinent = function (value) {
        setContinent(value);
        setTeam(getContinentFisrtTeam(teamList, value));
    };

    /**
     * 대륙별 첫 국가 얻어오기
     * @param {array} teamList : 대륙리스트
     * @param {string} continentCode : 대륙코드
     */
    const getContinentFisrtTeam = function (teamList, continentCode) {
        const team = teamList.filter(function (item) {
            return item.continent === continentCode;
        });

        return team.length ? team[0].code : '';
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
     * @param {number} restLength : 남은 팀 갯수
     */
    const changePort = function (restLength) {
        if (!((teams.length - restLength) % 4)) {
            switch (selectedPort) {
                case 'first':
                    setPort('second');
                    break;
                case 'second':
                    setPort('third');
                    break;
                case 'third':
                    setPort('fourth');
                    break;
                default:
                    return;
            }
        }
    };

    /**
     * 팀 추가
     */
    const submit = function () {
        let targetTeam = {};

        if (selectedTeam.length) {
            teams.forEach(function (item) {
                if (item.code === selectedTeam) {
                    targetTeam = item;
                    return false;
                }
            });

            //선택한 팀 제외한 팀들 다시 반환
            const availableTeams = teamList.filter(function (item) {
                return item.code !== targetTeam.code;
            });
            changePort(availableTeams.length);
            insertTeam({ ...targetTeam, selectedPort });
            setTeamList(availableTeams);
            setTeam(getContinentFisrtTeam(availableTeams, selectedContinent));
        } else {
            alert('국가를 선택해주세요..');
        }
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
            {/* <div className="">
                <SelectBox id={'portList'} label={'포트'} selectList={port} callback={changePort} />
            </div> */}
            <div>
                <button type="button" onClick={submit}>
                    {selectedPort} 포트 추가
                </button>
            </div>
        </div>
    );
};
export default GroupEditor;
