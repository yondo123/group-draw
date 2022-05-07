import { useCallback, useEffect, useReducer, useState } from 'react';
import { teams } from './static/team';
import GroupEditor from './components/GroupEditor';
import './App.css';

const reducer = function (state, action) {
    switch (action.type) {
        //리스트 초기화
        case 'init':
            return [];
        //삽입
        case 'insert':
            return;
        //삭제
        case 'remove':
            return;
        default:
            return state;
    }
};

function App() {
    //선택 국가 리스트
    const [countryList, dispatch] = useReducer(reducer, []);

    //mounted
    useEffect(function () {
        console.log('APP', 'mounted');
        dispatch({ type: 'init' });
    }, []);

    //updated
    useEffect(function () {
        console.log('updated');
    });

    /**
     * 팀 추가하기
     * @param {object} team : 선택 팀
     */
    const insertTeam = useCallback(function (team) {
        console.log(JSON.stringify(team));
    }, []);

    return (
        <div className="App">
            <GroupEditor countryList={countryList} insertTeam={insertTeam} />
        </div>
    );
}

export default App;
