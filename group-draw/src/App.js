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
            return;
        default:
            return state;
    }
};

function App() {
    //선택 국가 리스트
    const [drawList, dispatch] = useReducer(reducer, []);

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

    return (
        <div className="App">
            <GroupEditor insertTeam={insertTeam} />
            <hr />
            <GroupDrawList drawList={drawList} />
            <hr />
            <GroupTableList drawList={drawList} />
        </div>
    );
}

export default App;
