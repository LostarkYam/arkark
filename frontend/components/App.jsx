import React from 'react';
import { Route } from 'react-router-dom';
import TopNavBar  from './Navbar/topnavbar';
import Footer from './Navbar/footer';

class App extends React.Component {

  componentWillMount() {
    // document.body.style.backgroundColor = 'green';
  }

    render(){
      return(
        <React.Fragment>
          <Route path="/" component={ TopNavBar } />
          <Route path="/" component={ Footer } />
        </React.Fragment>
      );
    }
  }
  
export default App;