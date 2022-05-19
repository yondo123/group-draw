import { useEffect, useRef, useState } from 'react';
import { teams, continent, limited } from '../static/constants';
import SelectBox from './Select';

const GroupEditor = function ({ insertTeam, drawList }) {
    const insertCount = useRef(0);
    const [teamList, setTeamList] = useState(teams);
    const [selectedContinent, setContinent] = useState('uefa');
    const [selectedTeam, setTeam] = useState('bel');
    const [selectedPot, setPot] = useState('first');

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
     * @param {number} insertCount : 추가 횟수
     */
    const changePot = function (insertCount) {
        console.log(insertCount, '입니다.');
        if (insertCount % 8 < 1) {
            switch (selectedPot) {
                case 'first':
                    setPot('second');
                    break;
                case 'second':
                    setPot('third');
                    break;
                case 'third':
                    setPot('fourth');
                    break;
                default:
                    return;
            }
        }
    };

    /**
     * 등록 가능 상태 체크
     */
    const checkSubmit = function () {
        const drawLength = drawList.filter((item) => {
            return item.selectedPot !== selectedPot;
        }).length;
        return drawLength || insertCount.current >= 32;
    };

    /**
     * 팀 추가
     */
    const submit = function () {
        let targetTeam = {};
        let numberOfContinent = 0;
        if (selectedTeam.length) {
            teams.forEach(function (item) {
                if (item.code === selectedTeam) {
                    targetTeam = item;
                }

                if (item.continent === selectedContinent) {
                    numberOfContinent++;
                }
            });

            //선택한 팀 제외한 팀들 다시 반환
            const availableTeams = teamList.filter(function (item) {
                return item.code !== targetTeam.code;
            });

            const restContinent = availableTeams.filter(function (item) {
                return item.continent === selectedContinent;
            });

            if (numberOfContinent - restContinent.length >= limited[selectedContinent]) {
                setTeamList(
                    availableTeams.filter((item) => {
                        return item.continent !== selectedContinent;
                    })
                );
                setTeam('');
            } else {
                setTeamList(availableTeams);
                setTeam(getContinentFisrtTeam(availableTeams, selectedContinent));
            }
            insertCount.current += 1;
            changePot(insertCount.current);
            insertTeam({ ...targetTeam, selectedPot });
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
            <div>
                <button type="button" onClick={submit} disabled={checkSubmit()}>
                    {selectedPot} 포트 추가
                </button>
            </div>
        </div>
    );
};
export default GroupEditor;
