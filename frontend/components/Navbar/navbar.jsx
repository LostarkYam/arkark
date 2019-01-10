import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

      render(){
        if(typeof this.props.location === "object"){
        return(
      <div>
        <nav className="">
            <Link className="" to="/">League Watcher</Link>
        </nav>
      </div>
    );
  }else{
    return(<div></div>);
  }
  }
}
export default NavBar;