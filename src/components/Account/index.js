import React, { Fragment } from 'react';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

const AccountPage = () => {

  return(
    <Fragment>
      <h3>Account</h3>
      <PasswordForgetForm />
      <PasswordChangeForm />
    </Fragment>
  );
}

export default AccountPage;