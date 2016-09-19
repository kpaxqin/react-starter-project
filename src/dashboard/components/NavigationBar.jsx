import React, { PropTypes } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const NavigationBar = (props) => (
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={2} onClick={props.logout}>Log out</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

NavigationBar.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default NavigationBar;
