const style = {
    width: '50px',
    height: '50px'
};

export const carColumnsConfig = [
    {
        field: 'brand',
        colHeaderLabel: 'Brand',
        renderCol: ({ brand }) => brand,
        canSort: true
    },
    {
        field: 'model',
        colHeaderLabel: 'Model',
        renderCol: ({ model }) => model,
        renderColHeader(label) {
            return <>
                {label}🚘
            </>
        }
    },
    {
        field: 'color',
        colHeaderLabel: 'Color',
        renderCol: ({ color }) => <div style={{ ...style, backgroundColor: color }}></div>
    },
    {
        field: 'price',
        colHeaderLabel: 'Price',
        renderCol: ({ price }) => price,
        canSort: true
    },
];