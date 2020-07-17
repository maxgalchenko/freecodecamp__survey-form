import React from 'react';
// MUI
import Grid from '@material-ui/core/Grid';

const MainLayout = ({ children }) => {
  return (
    <Grid container>
      <Grid item xs={false} sm={1} />
      <Grid item xs={12} sm={10}>
        {children}
      </Grid>
      <Grid item xs={false} sm={1} />
    </Grid>
  );
};

export default MainLayout;
