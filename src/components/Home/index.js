import React, { Fragment } from 'react';

import { withAuthorization } from '../Session';

const HomePage = () => {

  return(
    <Fragment>
      <h3>HomePage</h3>
    </Fragment>
  );
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);