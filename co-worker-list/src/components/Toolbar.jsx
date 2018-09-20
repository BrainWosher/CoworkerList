import React from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import ToolbarLink from './ToolbarLink';
import { LinkContainer } from "react-router-bootstrap";

function Toolbar() {
  return(
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <ToolbarLink exact to="/">CO WORKER LIST APP</ToolbarLink>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
        <LinkContainer exact to="/">
          <NavItem >HOME</NavItem>
          </LinkContainer>
          <LinkContainer to="/list">
            <NavItem >CO WORKER LIST</NavItem>
          </LinkContainer>
          <LinkContainer to="/add">
            <NavItem >ADD NOTE</NavItem>  
          </LinkContainer>   
          <LinkContainer to="/settings">  
            <NavItem >SETTINGS</NavItem>  
          </LinkContainer>          
        </Nav>    
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Toolbar;