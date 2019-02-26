import React, { Fragment } from 'react';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';

const AccountPage = () => {

  return(
    <Fragment>
      <h3>Account</h3>
      <PasswordForgetForm />
      <PasswordChangeForm />
    </Fragment>
  );
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);