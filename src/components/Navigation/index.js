import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes'; 

const Navigation = () => {

  return(
    <Fragment>
      <ul>
        <li>
          <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
        <li>
          <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        <li>
          <Link to={ROUTES.ADMIN}>Admin</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default Navigation;