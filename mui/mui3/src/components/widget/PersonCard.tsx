import { Avatar, Box, Paper, Stack, Tooltip, Typography } from '@mui/material';
import React from 'react';

interface IPersonCardProps {
    name: string;
    photo: any;
    description: string;
    value: number;
}

function PersonCard({ name, photo, description, value }: IPersonCardProps) {
    return (
        <Box
            sx={{
                cursor: 'pointer'
            }}
        >
            <Paper
            elevation={3}
            sx={{
                width: '310px',
                height: '75px',
                padding: '5px 10px'
            }}>
                <Stack spacing={3} direction="row" justifyContent="space-between">
                    <Tooltip title={name}>
                        <Avatar sx={{ width: 65, height: 65}} alt={name} src={photo} />
                    </Tooltip>
                    <Stack spacing={1}>
                        <Typography sx={{ textAlign: 'center'}} variant="subtitle1">{name}</Typography>
                        <Typography sx={{ textAlign: 'center'}} variant="subtitle2">{description}</Typography>
                    </Stack>
                    <Stack justifyContent="space-evenly">
                        <Typography variant="h5">
                            {value}
                        </Typography>
                    </Stack>
                </Stack>
            </Paper>

        </Box>
    );
}

export default PersonCard;
