import { Box, Button, Checkbox, FormControlLabel, FormGroup, Paper, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

// fws email alerts form
function Form4() {
    const [email] = useState('bfost@dev.com');
    const [emailSubscribe, setEmailSubscribe] = useState(false);
    
    function handleSubmit(): void {
        console.log('email', email);
        console.log('emailSubscribe', emailSubscribe);
        // TODO reset form
    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '30ch'},
                '& .MuiFormControl-root': { m: 1, width: '30ch'},
                '& .MuiButton-root': { m: 1, width: '25ch'},
            }}
        >
            <Paper sx={{
                padding: '10px'
            }}>
                <Typography sx={{mb: '5px'}} variant="h4">Email Alerts</Typography>
                <FormGroup>
                    <TextField disabled label="Email Address" value={email} />
                    <Typography variant="body2">Contact support to change email address</Typography>
                    <FormControlLabel 
                        style={{ pointerEvents: 'none', paddingLeft: '10px' }}
                        control={
                            <Checkbox 
                                checked={emailSubscribe} 
                                onChange={(e) => {setEmailSubscribe(e.target.checked)}} 
                                style={{ pointerEvents: 'auto'}}
                            />
                        } 
                        label="Get Email Alerts" 
                    />
                    <Stack direction="row" justifyContent="space-evenly">
                        <Button onClick={handleSubmit} color="primary" variant="contained">Update Email Alerts</Button>
                    </Stack>
                </FormGroup>
            </Paper>
        </Box>
    );
}

export default Form4;