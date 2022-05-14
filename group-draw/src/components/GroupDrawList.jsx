const GroupDrawList = function ({ drawList, insertGroup }) {
    const shuffle = function () {
        return Math.random() - 0.5;
    };

    /**
     * 팀 선택
     * @param {object} team : 선택 팀
     */
    const selectTeam = function (team) {
        insertGroup(team);
    };

    return (
        <div>
            <h2>👉추첨하기</h2>
            <div>
                {[...drawList].sort(shuffle).map(function (item) {
                    return (
                        <span key={item.code}>
                            <button
                                type="button"
                                className="circle"
                                onClick={(e) => {
                                    selectTeam(item);
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
