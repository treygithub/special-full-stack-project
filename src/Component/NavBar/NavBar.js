import React, { Component } from 'react';
import  { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class NavBar extends Component{

    render(){
    return(
        <div>
            <nav>
                <ul style={{listStyle:'none'}}>
                    <li><NavLink to='/'><Button>Home</Button></NavLink></li>
                    <li><NavLink to='/Cart'><Button>Cart</Button></NavLink></li>
                    <li><NavLink to='/Items'><Button>Items</Button></NavLink></li>
                </ul>
            </nav>
        </div>
)}
}
export default NavBar;
