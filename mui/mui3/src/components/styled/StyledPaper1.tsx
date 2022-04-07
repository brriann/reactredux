import React from 'react';

import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const StyledPaper1 = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    height: '150px'
}));

export default StyledPaper1;