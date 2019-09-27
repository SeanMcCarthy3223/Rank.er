import React from 'react';
import Employee from './ResultComponents/Employee.jsx';

const BottomRated = (props) => {
    return(
        <div>
            {props.currentBottom.map(employee => {
                return <Employee employee={employee} key={employee.id} />
            })}
        </div>
    );
}

export default BottomRated;