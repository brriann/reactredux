import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import StyledPaper1 from '../styled/StyledPaper1';

function StackLayout1() {
    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
                <StyledPaper1>
                    Paper1
                </StyledPaper1>
                <StyledPaper1>
                    Paper2
                </StyledPaper1>
                <StyledPaper1>
                    Paper3
                </StyledPaper1>
            </Stack>
        </Box>
    );
}

export default StackLayout1;