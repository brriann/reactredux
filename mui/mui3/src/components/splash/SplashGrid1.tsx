import React from 'react';

import { Grid } from '@mui/material';
import StyledPaper1 from '../styled/StyledPaper1';
import SplashPaper1 from './SplashPaper1';
import SplashPaper2 from './SplashPaper2';

function SplashGrid1() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <SplashPaper1 />
        </Grid>
        <Grid item xs={12} md={6}>
          <SplashPaper2 />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StyledPaper1>
              BOX3
          </StyledPaper1>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StyledPaper1>
              BOX4
          </StyledPaper1>
        </Grid>
      </Grid>
    );
}

export default SplashGrid1;