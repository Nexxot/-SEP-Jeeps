import React  from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import UserIcon from './UserIcon';
import AddProcess from './AddProcessToView'
const NavigationBar = ({updateState, initValuesProcessView}) => {
    return (
        <Navbar bg="light" expand="lg" className="customNavBar">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <AddProcess updateState={updateState} initValuesProcessView={initValuesProcessView}/>
                    <Nav.Link href="Export">EXPORT</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <a href="User">
                <UserIcon></UserIcon>
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