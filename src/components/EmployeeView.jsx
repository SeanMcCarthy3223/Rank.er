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
                    Show All
                </div> :
                <div>
                    Show Top and Bottom Three
                </div>
            }
            </div>
        </div>
    );
}

export default EmployeeView;