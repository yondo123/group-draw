import React from 'react';

const Group = function ({ group, name }) {
    return (
        <table>
            <tr>
                <th colSpan={2}>GROUP {name}</th>
            </tr>
            <tr>
                <td>{group[0] ? group[0].continent.toUpperCase() : ''}</td>
                <td>{group[0] ? group[0].name : ''}</td>
            </tr>
            <tr>
                <td>{group[1] ? group[1].continent.toUpperCase() : ''}</td>
                <td>{group[1] ? group[1].name : ''}</td>
            </tr>
            <tr>
                <td></td>
                <td>{group[2] ? group[2].continent.toUpperCase() : ''}</td>
                <td>{group[2] ? group[2].name : ''}</td>
            </tr>
            <tr>
                <td>{group[3] ? group[3].continent.toUpperCase() : ''}</td>
                <td>{group[3] ? group[3].name : ''}</td>
            </tr>
        </table>
    );
};

const GroupTable = function ({ group }) {
    return (
        <>
            <Group group={group.A} name={'A'} />
            <Group group={group.B} name={'B'} />
            <Group group={group.C} name={'C'} />
            <Group group={group.D} name={'D'} />
            <Group group={group.E} name={'E'} />
            <Group group={group.F} name={'F'} />
            <Group group={group.G} name={'G'} />
            <Group group={group.H} name={'H'} />
        </>
    );
};

Group.defaultProps = {
    group: {
        A: [{ code: '', continent: '', resource: '', name: '', selectedPot: '' }],
        B: [{ code: '', continent: '', resource: '', name: '', selectedPot: '' }],
        C: [{ code: '', continent: '', resource: '', name: '', selectedPot: '' }],
        D: [{ code: '', continent: '', resource: '', name: '', selectedPot: '' }],
        E: [{ code: '', continent: '', resource: '', name: '', selectedPot: '' }],
        F: [{ code: '', continent: '', resource: '', name: '', selectedPot: '' }],
        G: [{ code: '', continent: '', resource: '', name: '', selectedPot: '' }],
        H: [{ code: '', continent: '', resource: '', name: '', selectedPot: '' }]
    }
};

export default React.memo(GroupTable);
