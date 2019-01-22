import React from 'react';
import './toptabs.css';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

class TopTabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink href="/" active className="toptabs">Home</NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret className="toptabs">
              Builds
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Classes</DropdownItem>
              <DropdownItem href="/admin">Warrior</DropdownItem>
              <DropdownItem href="/admin">Fighter</DropdownItem>
              <DropdownItem href="/admin">Hunter</DropdownItem>
              <DropdownItem href="/admin">Magician</DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="/admin">Tips & Tricks</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink href="/updates" className="toptabs">Updates</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/news" className="toptabs" >News</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/admin" className="toptabs" >Discussion Board</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default TopTabs;