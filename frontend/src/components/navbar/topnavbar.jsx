import React from 'react';
import { Navbar, NavItem, Nav, NavbarBrand, NavLink } from 'reactstrap';

class TopNavBar extends React.Component {
  render(){
      return(
        <Navbar color="light" light expand="md">
          <NavbarBrand>Lost Ark Site</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href='/admin'>Admin</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Skill Tree</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Builds</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Get Started</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      );
  }
}
export default TopNavBar;