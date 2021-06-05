import React from 'react';
import MaterialTable from 'material-table';

export default function EnhancedTable() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'Surname', field: 'surname' },
            { title: 'Employee ID', field: 'employeeID', type: 'numeric' },
            { title: 'Salary', field: 'salary', type: 'numeric' },
            { title: 'Location', field: 'location' },
            {
                title: 'Job Title',
                field: 'jobTitle',
                lookup: { 12: 'Mathematician', 14: 'Astrophysicist', 1: 'Director', 2: 'Ceo', 3: 'Software Developer', 4: 'Manager', 5: 'Janitor' },
            },
        ],
        data: [
            { name: 'Adrian', surname: 'C', salary: 145950, location: 'California', employeeID: 4576, jobTitle: 1 },
            { name: 'Jose', surname: 'T', salary: 89055, location: 'California', employeeID:6789, jobTitle: 12 },
            { name: 'Manny', surname: 'C', salary:12389, location: 'California', employeeID: 6543, jobTitle: 14 },
        ],
    });

    return(
        <MaterialTable
            title="Employee Database" 
            columns={state.columns}
            data={state.data}
            editable={{
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
                                const data = [...prevState.data];
                                data.push(newData);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState(prevState => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
            }} 
        />
    );
}