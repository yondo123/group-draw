import { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import GroupEditor from './components/GroupEditor';
import GroupDrawList from './components/GroupDrawList';
import GroupTableList from './components/GroupTableList';
import './App.css';

const reducer = function (state, action) {
    switch (action.type) {
        //리스트 초기화
        case 'init':
            return [];
        //삽입
        case 'insert':
            return [action.team, ...state];
        //삭제
        case 'remove':
            return state.filter(function (item) {
                return item.code !== action.code;
            });
        default:
            return state;
    }
};

function App() {
    //선택 국가 리스트
    const [drawList, dispatch] = useReducer(reducer, []);
    const [group, setGroup] = useState({
        A: [],
        B: [],
        C: [],
        D: [],
        E: [],
        F: [],
        G: [],
        H: []
    });

    //mounted
    useEffect(function () {
        console.log('APP', 'mounted');
        dispatch({ type: 'init' });
    }, []);

    //updated
    useEffect(function () {
        console.log('update');
    });

    /**
     * 팀 추가하기
     * @param {object} team : 선택 팀
     */
    const insertTeam = useCallback(function (team) {
        dispatch({ type: 'insert', team });
    }, []);

    const insertGroup = function (targetTeam) {
        const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        const continent = targetTeam.continent;
        const pot = targetTeam.selectedPot;

        for (let index = 0; index < 8; index++) {
            const targetGroupName = groups[index];
            const targetGroup = group[targetGroupName];
            let maximum = 1;
            let minimum = 0;

            switch (pot) {
                case 'second':
                    minimum = 1;
                    break;
                case 'third':
                    minimum = 2;
                    break;
                case 'fourth':
                    minimum = 3;
                    break;
                default:
                    minimum = 0;
                    break;
            }

            if (targetGroup.length === minimum) {
                const exist = targetGroup.filter(function (item) {
                    return continent === item.continent;
                });

                if (continent === 'uefa') {
                    maximum = 2;
                }

                if (exist.length < maximum) {
                    setGroup({
                        ...group,
                        [targetGroupName]: [...targetGroup, targetTeam]
                    });
                    break;
                }
            }
        }
        dispatch({ type: 'remove', code: targetTeam.code });
    };

    return (
        <div className="App">
            <GroupEditor insertTeam={insertTeam} drawList={drawList} />
            <hr />
            <GroupDrawList insertGroup={insertGroup} drawList={drawList} />
            <hr />
            <GroupTableList group={group} />
        </div>
    );
}

export default App;
