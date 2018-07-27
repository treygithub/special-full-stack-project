import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Cart from './Component/Cart/Cart'
import Menu from './Component/Menu/Menu';
import About from './Component/About/About';
import Features from './Component/Features/Features';



const Router = () =>  (
      
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route path='/Menu' component={ Menu }/> 
          <Route path='/About' component={ About }/>
          <Route path='/Features' component={ Features }/>
          <Route path='/Cart' component={ Cart }/>
        </Switch>
      
);

export default Router;