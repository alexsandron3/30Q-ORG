import { Box, CssBaseline } from '@mui/material';
import React from 'react';
import Header from '../components/Header';

const backgroundImage = `${process.env.PUBLIC_URL}/assets/dark_bg.jpg`;
const classes = {
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
};

function Index() {
  return (
    <Box sx={classes.root}>
      <CssBaseline />
      <Header />
    </Box>
  );
}

export default Index;
