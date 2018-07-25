import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Component/Home';
import Cart from './Component/Cart'
import Items from './Component/Items'


const Router = () =>  (
      
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route path='/Cart' component={ Cart }/> 
          <Route path='/Items' component={ Items }/>
          {/* <Route path='/Step3' component={ Step3 }/> */}
        </Switch>
      
);

export default Router;