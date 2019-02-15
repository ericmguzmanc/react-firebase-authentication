import React from 'react';
import { Link } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';

import '../styles/common.css';
import * as ROUTES from '../../constants/routes'; 

const Navigation = (props) => {

  return(
    <div>
      <Navbar color="dark" light expand="md" className="main-navbar">
        <NavbarBrand href="/">React Firebase Authentication</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to={ROUTES.SIGN_IN} className="rlink">Sign In</Link>
            </NavItem>
            <NavItem>
              <Link to={ROUTES.LANDING} className="rlink">Landing</Link>
            </NavItem>
            <NavItem>
              <Link to={ROUTES.HOME} className="rlink">Home</Link>
            </NavItem>
            <NavItem>
              <Link to={ROUTES.ACCOUNT} className="rlink">Account</Link>
            </NavItem>
            <NavItem>
              <Link to={ROUTES.ADMIN} className="rlink">Admin</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;