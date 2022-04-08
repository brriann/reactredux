import { Box, Button, Checkbox, FormControlLabel, FormGroup, Paper, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

// fws text alerts form
function Form3() {
    const [phone, setPhone] = useState('');
    const [draftUpdates, setDraftUpdates] = useState(false);
    const [scoreAlerts, setScoreAlerts] = useState(false);
    
    function handleSubmit(): void {
        console.log('phone', phone);
        console.log('draftUpdates', draftUpdates);
        console.log('scoreAlerts', scoreAlerts);
        // TODO reset form
    }

    function handleCancel(): void {
        console.log('cancel alerts!');
        // TODO
    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '30ch'},
                '& .MuiFormControl-root': { m: 1, width: '30ch'},
                '& .MuiButton-root': { m: 1 },
                '& .MuiButton-containedPrimary': { width: '25ch'},
            }}
        >
            <Paper sx={{
                padding: '10px'
            }}>
                <Typography sx={{mb: '5px'}} variant="h4">Text Alerts</Typography>
                <FormGroup>
                    <TextField label="Cell Phone" value={phone} onChange={(e) => {setPhone(e.target.value)}} />
                    <FormControlLabel 
                        style={{ pointerEvents: 'none', paddingLeft: '10px' }}
                        control={
                            <Checkbox 
                                checked={draftUpdates} 
                                onChange={(e) => {setDraftUpdates(e.target.checked)}} 
                                style={{ pointerEvents: 'auto'}}
                            />
                        } 
                        label="Get Draft Updates" 
                    />
                    <FormControlLabel 
                        style={{ pointerEvents: 'none', paddingLeft: '10px' }}
                        control={
                            <Checkbox 
                                checked={scoreAlerts} 
                                onChange={(e) => {setScoreAlerts(e.target.checked)}} 
                                style={{ pointerEvents: 'auto'}}
                            />
                        } 
                        label="Get Skier Score Alerts" 
                    />
                    <Typography variant="body2" color="warning">Sorry, text alerts only available in the US</Typography>
                    <Stack direction="row" justifyContent="space-evenly">
                        <Button onClick={handleSubmit} color="primary" variant="contained">Update Text Alerts</Button>
                        <Button onClick={handleCancel} color="warning" variant="outlined">Stop Alerts</Button>
                    </Stack>
                </FormGroup>
            </Paper>
        </Box>
    );
}

export default Form3;