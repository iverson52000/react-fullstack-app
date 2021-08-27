import React from "react";
import { useHistory } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";

function Navigation({ isLogin, setIsLogin }) {
  const history = useHistory();

  const onSignout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
    history.push("/");
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Product App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="http://127.0.0.1:8000/admin/" target="_blank">
              Admin
            </Nav.Link>
            {isLogin && <Nav.Link onClick={onSignout}>Signout</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
