import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render(){
      return(
        <Navbar bsStyle='inverse' expand="md">
          <Navbar.Header>
            <Navbar.Brand><Link to={'#'}>LOST ARK</Link></Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem disabled>
              @Copyright 2019
            </NavItem>
          </Nav>
        </Navbar>
      );
  }
}
export default Footer;