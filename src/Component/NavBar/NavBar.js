import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default class NavBar extends Component {
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
        
        <Navbar  color="faded" light >
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <NavbarBrand  className="align-cenetr">Buttler Brothers</NavbarBrand>  
              <NavbarBrand href="/" className="align-right"><Button outline color="secondary">Make Reservations</Button></NavbarBrand>          
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink tag={Link} to='/'>Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to='/Menu'>Menu</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to='/About'>About</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to='/Features'>Features</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to='/Cart'>Cart</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to='/Login'>Login</NavLink>
                  </NavItem>
                 </Nav>
              </Collapse>
        </Navbar>
        
      </div>
    );
  }
}