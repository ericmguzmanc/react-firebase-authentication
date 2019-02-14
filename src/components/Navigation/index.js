import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import pink from '@material-ui/core/colors/pink';

import '../styles/common.css';
import * as ROUTES from '../../constants/routes'; 

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: pink,
  },
  typography: {
    useNextVariants: true,
  },
})

const styles = (theme) => ({
  root: {
    with: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing.unit
  }
});

const Navigation = (props) => {
  const { classes } = props;

  return(
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            {/* <Typography className={classes.title} variant="h6" color="inherit" noWrap> */}
              React Firebase Authentication
            {/* </Typography> */}
            <div className={classes.grow} />
            <Button color="secondary" className={classes.button}>
              <Link to={ROUTES.SIGN_IN} className="rlink">Sign In</Link>
            </Button> 
            <Button color="secondary" className={classes.button}>
              <Link to={ROUTES.LANDING} className="rlink">Landing</Link>
            </Button>
            <Button color="secondary" className={classes.button}>
              <Link to={ROUTES.HOME} className="rlink">Home</Link>
            </Button> 
            <Button color="secondary" className={classes.button}>
              <Link to={ROUTES.ACCOUNT} className="rlink">Account</Link>
            </Button>
            <Button color="secondary" className={classes.button}>
              <Link to={ROUTES.ADMIN} className="rlink">Admin</Link>
            </Button>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </div>
  );
}

export default withStyles(styles(theme))(Navigation);