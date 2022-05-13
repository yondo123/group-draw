const Pot = function ({ id, label, selectList, callback }) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <select
                id={id}
                onChange={(e) => {
                    callback(e.target.value);
                }}
            >
                {selectList.map(function (item) {
                    return (
                        <option key={item.code} value={item.code}>
                            {item.name}
                        </option>
                    );
                })}
            </select>
        </>
    );
};
export default Pot;
