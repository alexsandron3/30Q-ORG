import {
  AppBar, IconButton, Toolbar, Typography, Box, Grow,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link as Scroll } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const classes = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  appbar: {
    background: 'none',
  },
  icon: {
    color: '#fff',
    fontSize: '1.5rem',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  colorText: {
    color: '#41419e',
  },
  title: {
    color: '#fff',
  },
  container: {
    textalign: 'center',
  },
  goDown: {
    color: '#41419e',
    fontSize: '4rem',
  },
};
function Header() {
  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    setPageLoaded(true);
  });
  return (
    <Box sx={classes.root}>
      <AppBar sx={classes.appbar} elevation={0}>
        <Toolbar sx={classes.appbarWrapper}>
          <Typography variant="h5" sx={classes.appbarTitle}>
            30Q
            <span style={classes.colorText}> E-SPORTS</span>
          </Typography>
          <IconButton>
            <MenuIcon sx={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grow in={pageLoaded} {...(pageLoaded ? { timeout: 1000 } : {})}>
        <Box sx={classes.container}>
          <Typography variant="h4" sx={classes.title}>
            Bem vindos a 30Q
            <br />
            <span style={classes.colorText}> E-SPORTS</span>
          </Typography>
          <Scroll to="about-us" smooth>

            <IconButton>
              <ExpandMoreIcon sx={classes.goDown} />
            </IconButton>
          </Scroll>
        </Box>
      </Grow>
    </Box>
  );
}

export default Header;
