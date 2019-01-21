import React from 'react';
import Logo from '../../img/lostarklight.png';
import "./topnavbar.css";
import { Navbar, NavItem, Nav, NavbarBrand, NavLink } from 'reactstrap';

class TopNavBar extends React.Component {
  render(){
      return(
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/"><img src={Logo} alt="ArkArk Logo" className="Logo" /></NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href='/'>Log in</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/'>Sign Up</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      );
  }
}
export default TopNavBar;