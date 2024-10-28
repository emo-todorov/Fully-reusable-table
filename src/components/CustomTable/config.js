const style = {
    width: '50px',
    height: '50px'
};

export const carColumnsConfig = [
    {
        colHeaderLabel: 'Brand',
        renderCol: ({ brand }) => brand
    },
    {
        colHeaderLabel: 'Model',
        renderCol: ({ model }) => model,
        renderColHeader(label) {
            return <>
                {label}🚘
            </>
        }
    },
    {
        colHeaderLabel: 'Color',
        renderCol: ({ color }) => <div style={{ ...style, backgroundColor: color }}></div>
    }
];