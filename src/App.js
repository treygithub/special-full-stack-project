import React, { Component } from 'react';
import Router from './router';
import NavBar from './Component/NavBar/NavBar'
import './app.css'
import './Component/NavBar/NavBar.css'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <NavBar/>
          <Router/>
        </header>
      </div>
    );
  }
}

export default App;
