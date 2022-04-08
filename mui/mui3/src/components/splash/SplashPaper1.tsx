import { Button, Stack, Typography } from '@mui/material';
import React from 'react';

import StyledPaper2 from '../styled/StyledPaper2';

const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada viverra felis. Nulla rutrum leo a mauris finibus, in sollicitudin sapien convallis. Etiam sit amet urna lorem. Maecenas gravida id est eu malesuada. Etiam at est ut augue suscipit porta. Sed cursus orci ornare neque efficitur suscipit. Vestibulum molestie egestas urna, vel tempus ipsum tristique sit amet.';

function SplashPaper1() {
    return (
        <StyledPaper2 elevation={3} sx={{ padding: 3 }}>
            <Stack sx={{ height: '100%' }} justifyContent="space-between">
                <Typography component={'div'} variant="h4">Do something awesome.</Typography>
                <Typography component={'div'} sx={{ mt: 2, fontSize: 14, fontStyle: 'italic' }} variant="body2">{paragraph}</Typography>
                <Stack direction="row" justifyContent="center">
                    <Button color="primary" variant="outlined">Try for free</Button>
                </Stack>
            </Stack>
        </StyledPaper2>
    );
}

export default SplashPaper1;