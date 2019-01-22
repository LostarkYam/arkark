import React from 'react';
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
        <Nav tabs>
          <NavItem>
            <NavLink href="/" active>Home</NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
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
            <NavLink href="/admin">Updates</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/admin">News</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/admin">Discussion Board</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default TopTabs;