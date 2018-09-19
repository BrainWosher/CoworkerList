import React from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

function Toolbar() {
  return(
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">CO WORKER LIST APP</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="/home">HOME</NavItem>
          <NavItem eventKey={2} href="#">CO WORKER LIST</NavItem>
          <NavItem eventKey={3} href="#">ADD NOTE</NavItem>           
          <NavItem eventKey={4} href="#">SETTINGS</NavItem>           
        </Nav>    
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Toolbar;