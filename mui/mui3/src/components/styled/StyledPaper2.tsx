import React from 'react';

import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const StyledPaper2 = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    height: '400px'
}));

export default StyledPaper2;