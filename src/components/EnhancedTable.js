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
                lookup: { 34: 'Math Metition', 63: 'Astrophysicist', 1: 'Director', 2: 'Ceo', 3: 'Software Developer', 4: 'Manager', 5: 'Janitor' },
            },
        ],
        data: [
            
        ],
    });

    return(
        <MaterialTable
            title="Employee Database" 
            
            
        />
    );
}