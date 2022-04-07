import React from 'react';

import { Grid } from '@mui/material';
import StyledPaper1 from '../styled/StyledPaper1';

function GridLayout1() {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={3}>
          <StyledPaper1>
            BOX1
          </StyledPaper1>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StyledPaper1>
              BOX2
          </StyledPaper1>
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

export default GridLayout1;