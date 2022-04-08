import { Box, Button, FormGroup, MenuItem, Paper, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

enum SendTo {
    ALL_USERS,
    TOURNEY,
    SINGLE_PHONE
}

const sendToOptions = [
    {
        name: 'All Users',
        value: SendTo.ALL_USERS
    },
    {
        name: 'Single Tournament',
        value: SendTo.TOURNEY
    },
    {
        name: 'Single Cell Phone',
        value: SendTo.SINGLE_PHONE
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

// fws send text message
function Form5() {
    const [sendTo, setSendTo] = useState<SendTo | null>(null);
    const [tourneyId, setTourneyId] = useState<number | null>(null);
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit() {
        console.log('submit');
        console.log('tourneyId', tourneyId);
    }

    function handleReset() {
        setSendTo(null);
        setTourneyId(null);
        setPhone('');
    }
    return (
        <Box
            component="form"
            sx={{
                '& .MuiButton-contained': { width: '20ch' },
                '& .MuiButton-root': { m: 1 },
            }}
        >
            <Paper sx={{
                padding: '10px'
            }}>
                <Typography sx={{mb: '5px'}} variant="h4">Send Text Message</Typography>
                <FormGroup>
                    <TextField sx={{mb: '10px'}} select label="Send To..." value={sendTo ?? ''} onChange={(e) => {setSendTo(Number(e.target.value))}}>
                        {sendToOptions.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.name}
                            </MenuItem>
                        ))}
                    </TextField>
                    {sendTo === SendTo.TOURNEY && (
                        <TextField select label="Tournament" value={sendTo ?? ''} onChange={(e) => {setTourneyId(Number(e.target.value))}}>
                            {tourneys.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    )}
                    {sendTo === SendTo.SINGLE_PHONE && (
                        <TextField label="Cell Phone" value={phone} onChange={(e) => {setPhone(e.target.value)}} />
                    )}
                    <TextField sx={{ mt: '10px', mb: '10px' }} label="Message" multiline rows={4} value={message} onChange={(e) => setMessage(e.target.value)} />
                    {(sendTo === SendTo.TOURNEY || sendTo === SendTo.ALL_USERS) && (
                        <Typography sx={{ textAlign: 'center' }} color="red">Warning: you're about to text multiple users!</Typography>
                    )}
                    <Stack direction="row" justifyContent="space-evenly">
                        <Button onClick={handleSubmit} color="warning" variant="contained">Send Text</Button>
                        <Button onClick={handleReset} color="info" variant="outlined">Reset</Button>
                    </Stack>
                </FormGroup>
            </Paper>
        </Box>
    );
}

export default Form5;