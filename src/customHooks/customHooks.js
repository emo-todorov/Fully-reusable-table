import { ASCENDING, DESCENDING, NUMBER, STRING } from "../constants/constants";

const { useState } = require("react");

export const useSort = (data = []) => {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const sortedData = [...data].sort((a, b) => {
        const valueA = a[sortBy];
        const valueB = b[sortBy];

        const orderValue = sortOrder === ASCENDING ? 1 : -1;

        let result;

        if (typeof valueA === NUMBER) {
            result = (valueA - valueB) * orderValue;
        } if (typeof valueA === STRING) {
            result = valueA.localeCompare(valueB) * orderValue;
        }

        return result;
    });

    const handleSort = (field) => {
        if (field !== sortBy) {
            setSortOrder(ASCENDING);
            setSortBy(field);
        } else if (sortOrder === null) {
            setSortOrder(ASCENDING);
            setSortBy(field);
        } else if (sortOrder === ASCENDING) {
            setSortOrder(DESCENDING);
            setSortBy(field);
        } else if (sortOrder === DESCENDING) {
            setSortOrder(null);
            setSortBy(null);
        }
    };

    return {
        sortOrder,
        sortBy,
        sortedData,
        handleSort
    };
};