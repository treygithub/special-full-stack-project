import React, { Component } from 'react';
import Router from './router';
import NavBar from './Component/NavBar/NavBar'
import './app.css'
import './Component/NavBar/NavBar.css'
// import Home from './Component/Home/Home';
import Footer from  './Component/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <NavBar/>
          <Router/>
          <Footer/>
        </header>
      </div>
    );
  }
}

export default App;
