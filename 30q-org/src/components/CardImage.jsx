import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const classes = {
  root: {
    maxWidth: 400,
    background: 'rgba(0, 0, 0, 0.2)',
  },
  title: {
    fontWeight: 'bold',
    color: '#fff',
  },
  text: {
    color: '#fff',
  },
};
export default function CardImage() {
  return (
    <Card sx={classes.root}>
      <CardMedia
        component="img"
        height="200"
        image={`${process.env.PUBLIC_URL}/assets/winners.png`}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={classes.title}>
          Lizard
        </Typography>
        <Typography variant="body2" sx={classes.text}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
