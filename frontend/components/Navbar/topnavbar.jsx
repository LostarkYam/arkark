import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class TopNavBar extends React.Component {
  render(){
      return(
        <Navbar expand="md">
          <Navbar.Header>
            <Navbar.Brand><Link to={'#'}>LOST ARK</Link></Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem href='#'>
              Components
            </NavItem>
            <NavItem href='#'>
              Get Started
            </NavItem>
          </Nav>
        </Navbar>
      );
  }
}
export default TopNavBar;