import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';

import '../styles/common.css';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes'; 

const Navigation = ({ authUser }) => (
  <Fragment>{ authUser ? <NavigationAuth /> : <NavigationNonAuth />}</Fragment>
);


const NavigationAuth = () => (
  <Fragment>
    <Navbar color="dark" light expand="md" className="main-navbar">
      <NavbarBrand href="/">React Firebase Authentication</NavbarBrand>
      <NavbarToggler />
      <Collapse navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <div className="navItem-li">
              <Link to={ROUTES.LANDING} className="rlink">Landing</Link>
            </div>
          </NavItem>
          <NavItem>
            <div className="navItem-li">
              <Link to={ROUTES.HOME} className="rlink">Home</Link>
            </div>
          </NavItem>
          <NavItem>
            <div className="navItem-li">
              <Link to={ROUTES.ACCOUNT} className="rlink">Account</Link>
            </div>
          </NavItem>
          <NavItem>
            <SignOutButton />
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </Fragment>
);

const NavigationNonAuth = () => {

  return(
    <Fragment>
      <Navbar color="dark" light expand="md" className="main-navbar">
        <NavbarBrand href="/">React Firebase Authentication</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <div className="navItem-li">
                <Link to={ROUTES.LANDING} className="rlink">Landing</Link>
              </div>
            </NavItem>
            <NavItem>
              <div className="navItem-li">
                <Link to={ROUTES.SIGN_IN} className="rlink">Sign In</Link>
              </div>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Fragment>
  );
}

export default Navigation;