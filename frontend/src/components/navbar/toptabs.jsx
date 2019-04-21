import React from 'react';
import './toptabs.css';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';


class TopTabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.togglebt = this.togglebt.bind(this);
    this.state = {
      dropdownOpen: false,
      btDrownDownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  togglebt() {
    this.setState({
      btDrownDownOpen: !this.state.btDrownDownOpen
    });
  }

  render() {
    return (
      <div>
        <Nav className="tab-items">
          <NavItem>
            <NavLink href="/" active className="toptabs">Home</NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret className="toptabs">
              Guides
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Classes</DropdownItem>
              <DropdownItem href="/guides/warrior/warrior">Warrior</DropdownItem>
              <DropdownItem href="/guides/fighter/fighter">Fighter</DropdownItem>
              <DropdownItem href="/guides/hunter/hunter">Hunter</DropdownItem>
              <DropdownItem href="/guides/magician/magician">Magician</DropdownItem>
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
          <Dropdown nav isOpen={this.state.btDrownDownOpen} toggle={this.togglebt}>
            <DropdownToggle nav caret className="toptabs">
              Build Tree
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="/bt/warrior">Warrior</DropdownItem>
              <DropdownItem href="/bt/fighter">Fighter</DropdownItem>
              <DropdownItem href="/bt/hunter">Hunter</DropdownItem>
              <DropdownItem href="/bt/magician">Magician</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink href="/admin" className="toptabs" >Discussion Board</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default TopTabs;