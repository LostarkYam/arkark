import React, { Component } from 'react';
import './App.css';
import Footer from './components/navbar/footer';
import LoginNav from './components/navbar/loginnav';
import Home from './components/home/home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/navbar/notfound';
import Admin from './components/admin/admin';
import Classes from './components/admin/classes/classes';
import Skills from './components/admin/skills/skills';
import Passives from './components/admin/passives/passives';
import TopTabs from './components/navbar/toptabs';
import News from './components/news/news';
import Updates from './components/updates/updates';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={LoginNav}></Route>
          <Route path="/" component={TopTabs}></Route>
          <Switch>
            <Route exact path="/admin/classes" component={Classes}></Route>
            <Route exact path="/admin/skills" component={Skills}></Route>
            <Route exact path="/admin/passives" component={Passives}></Route>
            <Route exact path="/admin" component={Admin}></Route>
            <Route exact path="/" component={Home}></Route>
            <Route component={NotFound}></Route>
          </Switch>
          <Switch>
            <Route exact path="/news" component={News}></Route>
          </Switch>
          <Switch>
            <Route exact path="/updates" component={Updates}></Route>
\          </Switch>
          <Route path="/" component={Footer}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
