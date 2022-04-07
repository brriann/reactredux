import React from 'react';

import { Grid } from '@mui/material';
import StyledPaper1 from '../styled/StyledPaper1';

function GridLayout2 () {
    return (
        <Grid container spacing={1}>
            <Grid item  xs={12} sm={6} md={8}>
                <StyledPaper1>
                    BOX1
                </StyledPaper1>
            </Grid>
            <Grid item  xs={12} sm={6} md={4}>
                <StyledPaper1>
                    BOX1
                </StyledPaper1>
            </Grid>
            <Grid item  xs={12} sm={6} md={4}>
                <StyledPaper1>
                    BOX1
                </StyledPaper1>
            </Grid>
            <Grid item  xs={12} sm={6} md={8}>
                <StyledPaper1>
                    BOX1
                </StyledPaper1>
            </Grid>
        </Grid>
    );
}

export default GridLayout2;