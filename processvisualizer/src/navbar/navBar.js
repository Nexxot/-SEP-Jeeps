import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import UserIcon from './UserIcon';

const NavigationBar = () => {
    return (
        <Navbar bg="white" expand="lg" className="customNavBar">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="Add">ADD</Nav.Link>
                    <Nav.Link href="Delete">DELETE</Nav.Link>
                    <Nav.Link href="Approve">APPROVE</Nav.Link>
                    <Nav.Link href="Export">EXPORT</Nav.Link>
                    <Nav.Link href="Settings">SETTINGS</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <a href="User">
                <UserIcon />
            </a>
            <Navbar.Brand href="#home">
                <img
                    src={require("./PI_logo.PNG")}
                    width="60"
                    height="50"
                    className="d-inline-block align-top"
                    alt="PI Logo"
                />
            </Navbar.Brand>
        </Navbar>
    );
};

export default NavigationBar;