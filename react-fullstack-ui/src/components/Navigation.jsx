import React, { useContext } from 'react';
import { AppContext } from '../provider/AppProvider';

import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
    const { route, handleSignout } = useContext(AppContext);
  
    return (
        <>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand >Product App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="http://127.0.0.1:8000/admin/" target="_blank">Admin</Nav.Link>
                {(route !== "signin" && route !== "register") && 
                    <Nav.Link onClick={(event) => handleSignout(event)}>Signout</Nav.Link> 
                }
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </> 
    );
  }
  
  export default Navigation;
