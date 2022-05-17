import React from 'react';

const GroupTable = function ({ group }) {
    return (
        <>
            <table>
                <tr>
                    <th colSpan={2}>GROUP A</th>
                </tr>
                <tr>
                    <td>{group.A}</td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <table>
                <tr>
                    <th colSpan={2}>GROUP B</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <table>
                <tr>
                    <th colSpan={2}>GROUP C</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <table>
                <tr>
                    <th colSpan={2}>GROUP D</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <table>
                <tr>
                    <th colSpan={2}>GROUP E</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <table>
                <tr>
                    <th colSpan={2}>GROUP F</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <table>
                <tr>
                    <th colSpan={2}>GROUP G</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <table>
                <tr>
                    <th colSpan={2}>GROUP H</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </>
    );
};

GroupTable.defaultProps = {
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
