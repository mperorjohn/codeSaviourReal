import React from "react";
import '../App.css'; 
import { Link } from 'react-router';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {

    let date = new Date().toLocaleDateString();
  return (
    <Navbar className="bg-light" expand="lg">
        <Container>
        <Navbar.Brand>{ date}</Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/home">Home</Link></Nav.Link>
            <Nav.Link><Link to="/tiana">Tiana</Link></Nav.Link>
            <NavDropdown title="More Actions" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/login">Login</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to ="/register">Register</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to ="/forgetpassword">Forget Password</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/tunde">Checkout</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/registerTiana">Tiana's Registration</Link></NavDropdown.Item>
            </NavDropdown>
</Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default Header;
