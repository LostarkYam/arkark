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
import Warrior from './components/guides/warrior/warrior';
import Fighter from './components/guides/fighter/fighter';
import Hunter from './components/guides/hunter/hunter';
import Magician from './components/guides/magician/magician';
import BuildTree from './components/buildtree/buildtree';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={LoginNav}></Route>
          <Route path="/" component={TopTabs}></Route>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/news" component={News}></Route>
            <Route exact path="/updates" component={Updates}></Route>
            
            <Route exact path="/admin/classes" component={Classes}></Route>
            <Route exact path="/admin/skills" component={Skills}></Route>
            <Route exact path="/admin/passives" component={Passives}></Route>
            <Route exact path="/admin" component={Admin}></Route>

            <Route exact path="/guides/warrior/warrior" component={Warrior}></Route>
            <Route exact path="/guides/fighter/fighter" component={Fighter}></Route>
            <Route exact path="/guides/hunter/hunter" component={Hunter}></Route>
            <Route exact path="/guides/magician/magician" component={Magician}></Route>

            <Route exact path="/bt/warrior" component={BuildTree}></Route>
            <Route exact path="/bt/fighter" component={BuildTree}></Route>
            <Route exact path="/bt/hunter" component={BuildTree}></Route>
            <Route exact path="/bt/macigian" component={BuildTree}></Route>

            <Route component={NotFound}></Route>
          </Switch>
          <Route path="/" component={Footer}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
