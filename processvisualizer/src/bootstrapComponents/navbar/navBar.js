import React  from 'react';
import {Navbar, Nav, Dropdown} from 'react-bootstrap';
import AddProcess from '../AddProcessToView'
const NavigationBar = ({currentPage, setCurrentPage}) => {
    function updatePage () {
        setCurrentPage("userManagement")
    }

    return (
        <Navbar bg="light" expand="lg" className="customNavBar">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <AddProcess/>
                    <Nav.Link href="Export">EXPORT</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Dropdown>
                <Dropdown.Toggle className="userIconDropDown" variant="success" id="dropdown-user">
                    <img
                        id = "userIconNavBar"
                        src={require("./default_user_icon.jpeg")}
                        alt="User Icon"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="Name">Name</Dropdown.Item>
                    <Dropdown.Item href="Role">Role: Admin</Dropdown.Item>
                    <Dropdown.Item onClick={updatePage}>User Manager</Dropdown.Item>
                    <Dropdown.Item href="Logout">Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
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