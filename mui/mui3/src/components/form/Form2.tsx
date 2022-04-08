import { Box, Button, FormGroup, MenuItem, Paper, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const users = [
    {
      value: 1,
      label: 'Brian Foster',
    },
    {
      value: 2,
      label: 'Tim Welch',
    },
    {
      value: 3,
      label: 'Nicky Rod',
    },
    {
      value: 4,
      label: 'Nicky Ryan',
    },
];

const tourneys = [
    {
      value: 1,
      label: 'King of Darkness',
    },
    {
      value: 2,
      label: 'Malibu Open',
    },
    {
      value: 3,
      label: 'ADCC Trials',
    },
    {
      value: 4,
      label: 'French Open',
    },
];

// fws deduct points form
function Form2() {
    const [tourney, setTourney] = useState<number | null>(null);
    const [user, setUser] = useState<number | null>(null);
    const [points, setPoints] = useState<number | null>(null);

    function handleSubmit(): void {
        console.log('tourney', tourney);
        console.log('user', user);
        console.log('points', points);
        // TODO reset form
    }

    function handleReset(): void {
        setTourney(null);
        setUser(null);
        setPoints(null);
    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '30ch' },
                '& .MuiFormControl-root': { m: 1, width: '30ch' },
                '& .MuiButton-contained': { width: '20ch' },
                '& .MuiButton-root': { m: 1 },
            }}
        >
            <Paper sx={{
                padding: '10px'
            }}>
                <Typography sx={{mb: '5px'}} variant="h4">Deduct Points</Typography>
                <FormGroup>
                    <TextField select label="Tournament" value={tourney ?? ''} onChange={(e) => {setTourney(Number(e.target.value))}}>
                        {tourneys.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField select label="User" value={user ?? ''} onChange={(e) => {setUser(Number(e.target.value))}}>
                        {users.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField type="number" label="Points" value={points ?? ''} onChange={(e) => {setPoints(Number(e.target.value))}} />
                    <Stack direction="row" justifyContent="space-evenly">
                        <Button onClick={handleSubmit} color="warning" variant="contained">Deduct Points</Button>
                        <Button onClick={handleReset} color="info" variant="outlined">Reset</Button>
                    </Stack>
                </FormGroup>
            </Paper>
        </Box>
    );
}

export default Form2;