
    // <nav>
    //             <ul style={{listStyle:'none'}}>
    //                 <li><NavLink to='/'><Button>Home</Button></NavLink></li>
    //                 <li><NavLink to='/Cart'><Button>Cart</Button></NavLink></li>
    //                 <li><NavLink to='/Items'><Button>Items</Button></NavLink></li>
    //             </ul>
    //         </nav>


import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {

    return (
      <div>
        <Navbar color="faded" light>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        <NavbarBrand  className="align-cenetr">Buttler Brothers</NavbarBrand>  
          <NavbarBrand href="/" className="align-right"><Button outline color="secondary">Make Reservations</Button></NavbarBrand>          
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink to='/'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/Cart'>Cart</NavLink>
              </NavItem>
              <NavItem>
              <NavLink to='/Items'>Items</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}