import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'

const Filter = (props) => {
    return(
        <div>
            {props.displayAll ? 
            <Navbar bg="light" variant="light" fixed="bottom" id="footer-container">
                <Button variant="outline-light" size="lg" block onClick={props.onDisplayChangeToLess}>
                    Show Top Colors
                </Button>  
            </Navbar> : 
            <Navbar bg="light" variant="light" fixed="bottom" id="footer-container">
                <Button variant="outline-light" size="lg" block onClick={props.onDisplayChangeToAll}>
                    Show All Colors
                </Button>  
            </Navbar>
            }
        </div>
    );
}

export default Filter;