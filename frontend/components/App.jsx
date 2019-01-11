import React from 'react';
import { Route } from 'react-router-dom';
import TopNavBar from './Navbar/topnavbar';

class App extends React.Component {

    render(){
      return(
        <div>
          <Route path="/" component={ TopNavBar } />
        </div>
      );
    }
  }
  
export default App;