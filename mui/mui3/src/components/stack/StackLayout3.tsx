import { Box, Paper, Stack } from '@mui/material';
import React from 'react';

function StackLayout3() {
    return (
        <Box sx={{ width: '100%' }}>
            <Stack justifyContent="space-evenly" direction="row" spacing={1}>
                <Stack spacing={1}>
                    <Paper>paper :)</Paper>
                    <Paper>paper :)</Paper>
                    <Paper>paper :)</Paper>
                </Stack>
                <Stack spacing={1}>
                    <Paper>paper :)</Paper>
                    <Paper>paper :)</Paper>
                    <Paper>paper :)</Paper>
                </Stack>
                <Stack spacing={1}>
                    <Paper>paper :)</Paper>
                    <Paper>paper :)</Paper>
                    <Paper>paper :)</Paper>
                </Stack>
            </Stack>
        </Box>
    );
}

export default StackLayout3;