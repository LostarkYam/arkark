import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Footer from './components/navbar/footer';
import TopNavBar from './components/navbar/topnavbar';
import Home from './components/home/home';

class App extends Component {
  componentDidMount() {
    axios.get('/api/v1/ark_classes.json')
    .then(response => {
        console.log(response)
    }).catch(error => console.log(error))
}
  render() {
    return (
      <div className="App">
      <TopNavBar></TopNavBar>
        <Home></Home>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
