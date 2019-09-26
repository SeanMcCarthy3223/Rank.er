import React from 'react';
import AllEmployees from './EmployeeComponents/AllEmployees.jsx'
import TopRated from './EmployeeComponents/TopRated.jsx'
import BottomRated from './EmployeeComponents/BottomRated.jsx'

const EmployeeView = (props) => {
    return(
        <div>
            <div>Hello from EmployeeView.jsx!!</div>
            <div>
                {props.displayAll ? 
                <div>
                    <AllEmployees employees={props.employees}/>
                </div> :
                <div>
                    <TopRated currentTop={props.currentTop}/>
                    <BottomRated currentBottom={props.currentBottom}/>
                </div>
                }
            </div>
        </div>
    );
}

export default EmployeeView;