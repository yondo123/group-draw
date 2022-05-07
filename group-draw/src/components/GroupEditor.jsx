import { useEffect, useState } from 'react';
import { teams } from '../static/team';
import Port from './Port';

const GroupEditor = function ({ countryList, insertTeam }) {
    const [selectedContinent, setContinenet] = useState('afc');
    const [selectedTeam, setTeam] = useState();

    //updated
    useEffect(function () {});

    /**
     * 대륙 변경
     * @param {string} value : 선택 대륙
     */
    const changeContinent = function (value) {
        setContinenet(value);
    };

    /**
     * 팀 변경
     * @param {string} value : 선택 팀
     */
    const changeTeam = function (value) {
        setTeam(value);
    };

    /**
     * 팀 정보 가져오기
     * @param {string} teamCode : 국가코드
     */
    const getTeamInfo = function (teamCode) {
        let teamInfo = {};
        teams.forEach(function (item) {
            if (item.code === teamCode) {
                teamInfo = item;
                return false;
            }
        });

        return teamInfo;
    };

    return (
        <div>
            <div className="">
                <label htmlFor="continentList">대륙</label>
                <select
                    id="continentList"
                    value={selectedContinent}
                    onChange={(e) => {
                        changeContinent(e.target.value);
                    }}
                >
                    <option value="uefa">유럽</option>
                    <option value="conmebol">남아메리카</option>
                    <option value="concacaf">북아메리카</option>
                    <option value="caf">아프리카</option>
                    <option value="afc">아시아</option>
                    <option value="ofc">오세아니아</option>
                </select>
            </div>
            <div className="">
                <label htmlFor="teamList">국가</label>
                <select
                    id="teamList"
                    onChange={(e) => {
                        changeTeam(e.target.value);
                    }}
                >
                    {teams
                        .filter(function (item) {
                            return item.continent === selectedContinent;
                        })
                        .map(function (item) {
                            return (
                                <option key={item.code} value={item.code}>
                                    {item.name}
                                </option>
                            );
                        })}
                </select>
            </div>
            <div className="">
                <Port />
            </div>
            <div>
                <button type="button" onClick={insertTeam(getTeamInfo(selectedTeam))}>
                    리스트 추가
                </button>
            </div>
        </div>
    );
};
export default GroupEditor;
