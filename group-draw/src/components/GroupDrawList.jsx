const GroupDrawList = function ({ drawList }) {
    const shuffle = function () {
        return Math.random() - 0.5;
    };

    const alertTeam = function (team) {
        alert(team);
    };

    return (
        <div>
            <h2>등록 리스트</h2>
            <ul>
                {drawList.map(function (item) {
                    return (
                        <li key={item.code}>
                            국가 : {item.name} / 지역 : {item.continent.toUpperCase()} / 포트 : {item.selectedPot}
                        </li>
                    );
                })}
            </ul>
            <div>
                {[...drawList].sort(shuffle).map(function (item) {
                    return (
                        <span key={item.code}>
                            <button
                                type="button"
                                className="circle"
                                value={item.name}
                                onClick={(e) => {
                                    alertTeam(e.target.value);
                                }}
                            ></button>
                        </span>
                    );
                })}
            </div>
        </div>
    );
};

export default GroupDrawList;
