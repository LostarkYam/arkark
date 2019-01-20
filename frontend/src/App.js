import React, { Component } from 'react';
import './App.css';
import Footer from './components/navbar/footer';
import TopNavBar from './components/navbar/topnavbar';
import Home from './components/home/home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/navbar/notfound';
import Admin from './components/admin/admin';
import Classes from './components/admin/classes';
import Skills from './components/admin/skills';
import Passives from './components/admin/passives';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={TopNavBar}></Route>
          <Switch>
            <Route exact path="/admin/classes" component={Classes}></Route>
            <Route exact path="/admin/skills" component={Skills}></Route>
            <Route exact path="/admin/passives" component={Passives}></Route>
            <Route exact path="/admin" component={Admin}></Route>
            <Route exact path="/" component={Home}></Route>
            <Route component={NotFound}></Route>
          </Switch>
          <Route path="/" component={Footer}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
