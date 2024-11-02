import React, { useCallback, useMemo, useState } from 'react'
import CustomTable from '../CustomTable/CustomTable'
import './sortingTable.css';

const SortingTable = (props) => {
    const { data = [], config = [] } = props;
    const [sortingOrder, setSortingOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const sortData = useCallback((data = [], fieldName, sortingOrder) => {
        const sortOrder = sortingOrder === 'asc' ? 1 : -1;

        return data.sort((a, b) => {
            const valueA = a[fieldName];
            const valueB = b[fieldName];
            let result;

            if (typeof valueA === 'string') {
                result = valueA.localeCompare(valueB) * sortOrder;
            } else if (typeof valueA === 'number') {
                result = (valueA - valueB) * sortOrder;
            }

            return result;
        });
    }, []);

    const sortedData = sortData([...data], sortBy, sortingOrder);

    const clickHandler = (field) => {
        if (field !== sortBy) {
            setSortingOrder('asc');
            setSortBy(field);
        } else if (sortingOrder === null) {
            setSortingOrder('asc');
            setSortBy(field);
        } else if (sortingOrder === 'asc') {
            setSortingOrder('desc');
            setSortBy(field);
        } else if (sortingOrder === 'desc') {
            setSortingOrder(null);
            setSortBy(null);
        }
    };

    const getIcons = useMemo(() => (columnName) => {
        let icons = <>
            <div>🔼</div>
            <div>🔽</div>
        </>;

        if (columnName === sortBy) {
            if (sortingOrder === 'asc') {
                icons = <div>🔼</div>
            } else if (sortingOrder === 'desc') {
                icons = <div>🔽</div>
            }
        }

        return icons;
    }, [sortingOrder, sortBy]);

    const updatedConfig = config.map(colItem => {
        if (colItem.canSort) {
            return {
                ...colItem,
                renderColHeader(label) {
                    return <div className='sort-cell-wrapper' onClick={() => clickHandler(colItem.field)}>
                        <div>{label}</div>
                        <div>
                            {getIcons(colItem.field)}
                        </div>
                    </div>
                }
            }
        }

        return colItem;
    });

    return (
        <>
            <CustomTable {...props} config={updatedConfig} data={sortedData} />
        </>
    );
};

export default SortingTable;