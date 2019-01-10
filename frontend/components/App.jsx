import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './Navbar/navbar';

class App extends React.Component {

    render(){
      return(
        <div>
          <Route path="/" component={ NavBar } />
        </div>
      );
    }
  }
  
export default App;