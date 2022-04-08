import { Box, Button, Stack, styled, Typography } from '@mui/material';
import React from 'react';

// TODO - image module imports
//@ts-ignore
import banner1 from '../../assets/banner1.JPG';

function Banner () {
    return (
        <Box sx={{
                '& .MuiButton-root': { color: '#fff', border: '2px solid #fff' },
                '& .MuiButton-root:hover': { backgroundColor: '#fff', color: '#000', border: '2px solid #fff' },
                width: '100%', 
                height: '40vh'
            }} 
            style={{background: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner1})`, overflowX: 'hidden'}}>
            <Stack sx={{ height: '100%'}} justifyContent="space-evenly">
                <div>
                    <Typography sx={{ textAlign: 'center' }} variant="h1" color="white">mui3 splash</Typography>
                </div>
                <Stack direction="row" justifyContent="center">
                        <Button color="info" size="large" variant="outlined">Get Started</Button>
                </Stack>
            </Stack>
        </Box>
    );
}

export default Banner;