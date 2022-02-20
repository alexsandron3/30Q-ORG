import {
  Typography, Grid,
} from '@mui/material';
import React from 'react';
import CardImage from './CardImage';

const classes = {
  root: {
    height: '100vh',
    padding: '3%',
  },
  title: {
    textalign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
};
function About() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      sx={classes.root}
      id="about-us"
      spacing={5}
    >
      <Grid item xs={4}>
        <CardImage />
      </Grid>
      <Grid item xs={4}>
        <CardImage />
      </Grid>
      <Grid item xs={4}>
        <Typography sx={classes.title}>
          rem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default About;
