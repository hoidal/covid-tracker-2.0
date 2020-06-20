import React from 'react';
import '../App.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { STATE_ARRAY } from '../helper-functions/formatters';

function MainNavBar() {

    const stateNavLinks = STATE_ARRAY.map(state => {
        const stateLinkFormat = state.replace(/\s/g, '').toLowerCase();
        return (
            <NavDropdown.Item 
                key={stateLinkFormat} 
                href={`http://localhost:3000/state/${stateLinkFormat}`}
                style={{width: '15rem'}}
            >
                {state}
            </NavDropdown.Item>
        );
    })

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>COVID-19 TRACKING PROJECT</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">HOME</Nav.Link>
                <NavDropdown title="SELECT STATE" id="basic-nav-dropdown">
                    <div style={{width: '50vw', display: 'flex', flexWrap: 'wrap'}}>
                        {stateNavLinks}
                    </div>
                </NavDropdown>
            </Nav>
        </Navbar>
    )
}

export default MainNavBar;
