import React from 'react';

const Employee = (props) => {
    console.log(props.employee);
    return(
        <div>{props.employee.first_name}</div>
    );
}

export default Employee;