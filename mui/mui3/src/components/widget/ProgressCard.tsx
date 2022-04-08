import React from 'react';

import { Box, CircularProgress, Paper, Stack, Typography } from '@mui/material';

interface IProgressCardProps {
    title: string;
    value: number;
    maxValue: number;
}

function ProgressCard({ title, value, maxValue }: IProgressCardProps) {
    const valuePercentage = (value / maxValue) * 100;
    return (
        <Box>
            <Paper
                elevation={3}
                sx={{
                    width: '310px',
                    height: '120px',
                    padding: '10px 10px'
            }}>
                <Stack spacing={3} direction="row" justifyContent="space-between">
                    <CircularProgress 
                        size={100}
                        value={valuePercentage}
                        thickness={12}
                        variant="determinate"
                        color="warning"
                    />
                    <Stack sx={{ textAlign: 'right' }} justifyContent="space-evenly">
                        <Typography variant="h5">{title}</Typography>
                        <Typography variant="subtitle1">{value} / {maxValue}</Typography>
                    </Stack>
                </Stack>
            </Paper>
        </Box>
    );
}

export default ProgressCard;