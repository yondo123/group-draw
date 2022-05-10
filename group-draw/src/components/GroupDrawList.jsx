const GroupDrawList = function ({ drawList }) {
    return (
        <div>
            <h2>등록 리스트</h2>
            <ul>
                {drawList.map(function (item) {
                    return (
                        <li key={item.code}>
                            국가 : {item.name} / 지역 : {item.continent.toUpperCase()} / 포트 : {item.selectedPort}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default GroupDrawList;
