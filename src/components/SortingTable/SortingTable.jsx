import React, { useMemo } from 'react'
import CustomTable from '../CustomTable/CustomTable'
import './sortingTable.css';
import { useSort } from '../../customHooks/customHooks';
import { ASCENDING, DESCENDING } from '../../constants/constants';

const SortingTable = (props) => {
    const { data = [], config = [] } = props;
    const { sortOrder, sortBy, sortedData, handleSort } = useSort(data);

    const getIcons = useMemo(() => (columnName) => {
        let icons = <>
            <div>🔼</div>
            <div>🔽</div>
        </>;

        if (columnName === sortBy) {
            if (sortOrder === ASCENDING) {
                icons = <div>🔼</div>;
            } else if (sortOrder === DESCENDING) {
                icons = <div>🔽</div>;
            }
        }

        return icons;
    }, [sortOrder, sortBy]);

    const updatedConfig = config.map(colItem => {
        if (colItem.canSort) {
            return {
                ...colItem,
                renderColHeader(label) {
                    return <div className='sort-cell-wrapper' onClick={() => handleSort(colItem.field)}>
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
        <CustomTable {...props} config={updatedConfig} data={sortedData} />
    );
};

export default SortingTable;