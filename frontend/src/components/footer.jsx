import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
// import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render(){
      return(
        <Navbar color="light" light expand="md">
          <NavbarBrand>LOST ARK TEST</NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink href="/">Components</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      );
  }
}
export default Footer;