import React from 'react'

const CustomTable = ({ data = [], config = [] }) => {

    const renderHeader = () => config.map(({ colHeaderLabel, renderColHeader }) => {
        return <th key={colHeaderLabel}>
            {renderColHeader?.(colHeaderLabel) || colHeaderLabel}
        </th>;
    })

    const renderBody = () => data.map((curData) => {
        const columns = config.map(curItem => {
            const { colHeaderLabel, renderCol } = curItem;

            return <td key={colHeaderLabel}>
                {renderCol(curData)}
            </td>
        });

        return <tr key={curData.id}>
            {columns}
        </tr>;
    })

    return (
        <table>
            <thead>
                <tr>
                    {renderHeader()}
                </tr>
            </thead>
            <tbody>
                {renderBody()}
            </tbody>
        </table>
    )
}

export default CustomTable