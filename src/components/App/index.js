import React, { Fragment } from 'react';
import { 
  BrowserRouter as Router,
  Route,
 } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

import * as ROUTES from '../../constants/routes';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

const App = (props) => {
  // const { classes } = props;

  return(
    <Router>
      <Fragment>
        <Navigation />

        <Grid container spacing={24}>
          <Grid item xs={12}>
            {/* <Paper className={classes.paper}> */}
              <Route exact path={ROUTES.LANDING} component={LandingPage} />
              <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
              <Route path={ROUTES.SIGN_IN} component={SignInPage} />
              <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
              <Route path={ROUTES.HOME} component={HomePage} />
              <Route path={ROUTES.ACCOUNT} component={AccountPage} />
              <Route path={ROUTES.ADMIN} component={AdminPage} />
            {/* </Paper> */}
          </Grid>
        </Grid>
      </Fragment>
    </Router>
  );
}

export default withStyles(styles)(App);
