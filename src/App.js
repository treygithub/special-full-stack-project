import React, { Component } from 'react';
import  { NavLink } from 'react-router-dom';
import Router from './router';

const NavBar = (props) => 
<nav>
  <ul>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/Cart'>Cart</NavLink></li>
    <li><NavLink to='/Items'>Items</NavLink></li>
  </ul>
</nav>

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
