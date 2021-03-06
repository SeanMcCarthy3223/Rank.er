import React from 'react';
import Employee from './ResultComponents/Employee.jsx';

const AllEmployees = (props) => {
    return(
        <div className="bs">
            {props.employees.map(employee => {
                return <Employee employee={employee} key={employee.id} />
            })}
        </div>
    );
}

export default AllEmployees;