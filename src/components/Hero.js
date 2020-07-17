import React from 'react';
// MUI
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MainLayout from '../layouts/MainLayout';

const useStyles = makeStyles({
  wrap: {
    padding: '40px 5% 20px 5%',
  },
  title: {
    fontWeight: 700,
    fontSize: 30,
    marginBottom: 10,
  },
  descr: {
    fontStyle: 'italic',
    fontWeight: 300,
    textShadow: '1px 1px 1px rgba(0, 0, 0, 0.4)',
    fontSize: 20,
  },
});

const Hero = () => {
  const classes = useStyles();
  return (
    <MainLayout>
      <div className={classes.wrap}>
        <Typography variant='h1' className={classes.title} align='center'>
          freeCodeCamp Survey Form
        </Typography>
        <Typography variant='body1' className={classes.descr} align='center'>
          Thank you for taking the time to check my form
        </Typography>
      </div>
    </MainLayout>
  );
};

export default Hero;
