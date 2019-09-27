import React from 'react';
import AllEmployees from './EmployeeComponents/AllEmployees.jsx'
import TopRated from './EmployeeComponents/TopRated.jsx'
import BottomRated from './EmployeeComponents/BottomRated.jsx'

const EmployeeView = (props) => {
    return(
        <div id="employee-main">
            {props.displayAll ? 
            <div>
                <div>All Ranked Colors:</div>
                <AllEmployees employees={props.employees}/>
            </div> :
            <div>
                <div>Top 3 Ranked Colors:</div>
                <TopRated currentTop={props.currentTop}/>
                <div>Bottom 3 Ranked Colors:</div>
                <BottomRated currentBottom={props.currentBottom}/>
            </div>
            }
        </div>
    );
}

export default EmployeeView;