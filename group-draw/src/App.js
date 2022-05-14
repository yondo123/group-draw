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
    const [groupList, setGroupList] = useState([]);

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
        dispatch({ type: 'remove', code: targetTeam.code });
        setGroupList(targetTeam);
    };

    return (
        <div className="App">
            <GroupEditor insertTeam={insertTeam} drawList={drawList} />
            <hr />
            <GroupDrawList insertGroup={insertGroup} drawList={drawList} />
            <hr />
            <GroupTableList groupList={groupList} />
        </div>
    );
}

export default App;
