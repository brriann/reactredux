import { Grid } from '@mui/material';
import React from 'react';
import Header from './Header';
import SideNav from './SideNav';

const Layout: React.FunctionComponent = () => (
  <Grid container>
    <Grid item xs={12}>
      <Header />
    </Grid>
    <Grid item xs={12}>
      <SideNav />
    </Grid>
  </Grid>
);

export default Layout;
