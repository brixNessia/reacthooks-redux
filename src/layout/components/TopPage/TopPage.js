import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  color: {
    backgroundColor: blue[400],
  },
}));

function TopPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.color}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Welcome
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopPage;
