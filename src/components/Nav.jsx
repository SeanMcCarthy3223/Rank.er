import React from 'react';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = (props) => {
    return(
        <>
            <Navbar bg="dark" variant="outline-dark" sticky="top" id="nav-container">
                <Navbar.Brand className="center-navbar">Rank.er</Navbar.Brand>
            </Navbar>
        </>
    );
}

export default NavBar;