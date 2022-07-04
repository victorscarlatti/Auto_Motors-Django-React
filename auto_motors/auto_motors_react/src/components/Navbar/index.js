import React from 'react';
import { ReactComponent as logo } from '../../images/logo3.png'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import { Button } from 'react-bootstrap';
import * as All from 'react-bootstrap'

const Navbar = () => {
  return (
    <>
      <All.Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
        <All.Container>        
          <All.NavLink href='/'>
            <img src={require('../../images/logo3.png')} width='40px'/>
          </All.NavLink>
          <All.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <All.Navbar.Collapse id="responsive-navbar-nav">
             <All.Nav className="me-auto"> 
            </All.Nav>
            <All.Nav>
              <All.Nav.Link href='/about'>Produtos</All.Nav.Link>
              <All.Nav.Link href='/services'>Vender/Anunciar</All.Nav.Link>
              <All.Nav.Link href='/contact-us'>Contact-us</All.Nav.Link>
              <All.Nav.Link href='/sign-up'>Sign-up</All.Nav.Link>
            </All.Nav> 
            <All.NavLink>
              <All.Button variant="outline-info" to='/signin'>Sign In</All.Button>
            </All.NavLink>
          </All.Navbar.Collapse>
        </All.Container>
      </All.Navbar>
    </>
  );
};

export default Navbar;
