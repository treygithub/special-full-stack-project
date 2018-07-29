import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Cart from './Component/Cart/Cart'
import Menu from './Component/Menu/Menu';
import About from './Component/About/About';
import Features from './Component/Features/Features';
import Admin from './admin/admin';
import Login from './Component/Login/Login';



const Router = () =>  (
      
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route path='/Menu' component={ Menu }/> 
          <Route path='/About' component={ About }/>
          <Route path='/Features' component={ Features }/>
          <Route path='/Cart' component={ Cart }/>
          <Route path='/Admin' component={ Admin }/>
          <Route path='/Login' component={ Login }/>
        </Switch>
      
);

export default Router;