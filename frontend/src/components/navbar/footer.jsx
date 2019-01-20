import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
// import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render(){
      return(
        <Navbar color="light" light expand="md">
          <NavbarBrand>Lost Ark Site</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavbarBrand>@Copyright 2019</NavbarBrand>
            </NavItem>
          </Nav>
        </Navbar>
      );
  }
}
export default Footer;