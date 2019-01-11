import React from 'react';
import { NavItem, Navbar } from 'react-materialize';

class TopNavBar extends React.Component {

      render(){
        if(typeof this.props.location === "object"){
        return(
        <Navbar brand='logo' right>
          <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
          <NavItem href='#'>Components</NavItem>
        </Navbar>
    );
  }else{
    return(<div></div>);
  }
  }
}
export default TopNavBar;