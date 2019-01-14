import React from 'react';
import { Route } from 'react-router-dom';
import TopNavBar  from './Navbar/topnavbar';
import Footer from './Navbar/footer';
import Home from './Home/home';

class App extends React.Component {

    render(){
      return(
        <React.Fragment>
          <Route path="/" component={ TopNavBar } />
          <Route path="/" component={ Home } />
          <Route path="/" component={ Footer } />
        </React.Fragment>
      );
    }
  }
  
export default App;