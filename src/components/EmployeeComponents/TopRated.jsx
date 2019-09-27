import React from 'react';
import Employee from './ResultComponents/Employee.jsx';

const TopRated = (props) => {
    return(
        <div>
            {props.currentTop.map(employee => {
                return <Employee employee={employee} key={employee.id} />
            })}
        </div>
    );
}

export default TopRated;