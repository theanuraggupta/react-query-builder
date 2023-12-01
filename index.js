import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import { useEffect, useRef } from 'react';
import { QueryBuilderComponent } from '@syncfusion/ej2-react-querybuilder';
import { employeeData } from './data-source';

import { Browser } from '@syncfusion/ej2-base';

const Default = () => {
    let qbObj = useRef(null);
    const createdControl = () => {
        if (Browser.isDevice) {
            qbObj.current.summaryView = true;
        }
    };
    let columnData = [
        {
            field: "EmployeeID",
            label: "EmployeeID",
            type: "number",
            operators: [
                { key: "Equal", value: "equal" },
                { key: "Greater than", value: "greaterthan" },
                { key: "Less than", value: "lessthan" },
            ],
        },
        { field: "FirstName", label: "FirstName", type: "string" },
        {
            field: "TitleOfCourtesy",
            label: "Title Of Courtesy",
            type: "boolean",
            values: ["Mr.", "Mrs."],
        },
        { field: "Title", label: "Title", type: "string" },
        {
            field: "HireDate",
            label: "HireDate",
            type: "date",
            format: "dd/MM/yyyy",
        },
        { field: "Country", label: "Country", type: "string" },
        { field: "City", label: "City", type: "string" },
    ];
    let importRules = {
        condition: "and",
        rules: [
            {
                label: "EmployeeID",
                field: "EmployeeID",
                type: "number",
                operator: "equal",
                value: 1,
            },
            {
                label: "Title",
                field: "Title",
                type: "string",
                operator: "equal",
                value: "Sales Manager",
            },
        ],
    };
    return (<div className="control-pane">
            <div className="control-section">
                <div className="row">
                    <div className="col-lg-12 control-section">
                        <QueryBuilderComponent dataSource={employeeData} columns={columnData} rule={importRules} created={createdControl} ref={qbObj}></QueryBuilderComponent>
                    </div>
                </div>
            </div>
        </div>);
};
export default Default;

const root = createRoot(document.getElementById('sample'));
root.render(<Default />);