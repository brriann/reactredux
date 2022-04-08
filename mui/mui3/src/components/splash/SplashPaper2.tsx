import { Button, Stack, Typography } from '@mui/material';
import React from 'react';

import AppsIcon from '@mui/icons-material/Apps';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import LandscapeIcon from '@mui/icons-material/Landscape';
import StyledPaper2 from '../styled/StyledPaper2';

const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada viverra felis. Nulla rutrum leo a mauris finibus, in sollicitudin sapien convallis. Etiam sit amet urna lorem. Maecenas gravida id est eu malesuada.';

function SplashPaper2() {
    return (
        <StyledPaper2 elevation={3} sx={{ padding: 3 }}>
            <Stack sx={{ height: '100%' }} justifyContent="space-between">
                <Stack direction="row">
                    <AppsIcon sx={{ mr: 5}} fontSize="large" />
                    <Typography variant="h6">Full suite of apps</Typography>
                </Stack>
                <Typography component={'div'} variant="body2" sx={{ fontStyle: 'italic'}}>{paragraph}</Typography>
                <Stack direction="row">
                    <CloudQueueIcon sx={{ mr: 5}} fontSize="large" />
                    <Typography variant="h6">Cloud native approach</Typography>
                </Stack>
                <Typography component={'div'} variant="body2" sx={{ fontStyle: 'italic'}}>{paragraph}</Typography>
                <Stack direction="row">
                    <LandscapeIcon sx={{ mr: 5}} fontSize="large" />
                    <Typography variant="h6">Ready for anything</Typography>
                </Stack>
                <Typography component={'div'} variant="body2" sx={{ fontStyle: 'italic'}}>{paragraph}</Typography>
            </Stack>
        </StyledPaper2>
    );
}

export default SplashPaper2;