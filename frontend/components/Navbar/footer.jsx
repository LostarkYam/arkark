import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render(){
      return(
        <Navbar bsStyle='inverse' expand="md">
          <Navbar.Header>
            <Navbar.Brand><Link to={'#'}>LOST ARK</Link></Navbar.Brand>
            <Navbar.Brand><Link to={'#'}>News</Link></Navbar.Brand>
            <Navbar.Brand><Link to={'#'}>Skill Tree</Link></Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem className='white-text' disabled>
              @Copyright 2019
            </NavItem>
          </Nav>
        </Navbar>
      );
  }
}
export default Footer;