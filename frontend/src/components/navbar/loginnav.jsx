import React from 'react';
import Logo from '../../img/lostarklight.png';
import "./loginnav.css";
import { Navbar, NavItem, Nav, NavbarBrand, NavLink } from 'reactstrap';

class LoginNav extends React.Component {
  render(){
      return(
        <Navbar dark expand="md" className="login-nav">
          <NavbarBrand href="/"><img src={Logo} alt="ArkArk Logo" className="Logo" /></NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href='/admin'>Log in</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/'>Sign Up</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      );
  }
}
export default LoginNav;