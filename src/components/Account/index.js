import React, { Fragment } from 'react';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { AuthUserContext, withAuthorization } from '../Session';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <Fragment>
        <h3>Account: {authUser.email}</h3>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </Fragment>
    )}
  </AuthUserContext.Consumer>
);


const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);