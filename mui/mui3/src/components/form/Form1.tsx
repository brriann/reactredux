import { Box, Checkbox, FormControlLabel, FormGroup, MenuItem, Switch, TextField } from '@mui/material';
import React, { useState } from 'react';

const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

const Form1: React.FC = () => {
    const [name, setName] = useState('');
    const [currency, setCurrency] = useState('USD');
    const [checked, setChecked] = useState(false);
    const [switched, setSwitched] = useState(false);

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '30ch'}
            }}
        >
            <FormGroup>
                <TextField label="Name" value={name} onChange={(e) => {setName(e.target.value)}} />
                <TextField select label="Currency" value={currency} onChange={(e) => {setCurrency(e.target.value)}}>
                    {currencies.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <FormControlLabel control={<Checkbox checked={checked} onChange={(e) => {setChecked(e.target.checked)}} />} label="Is Checked" />
                <FormControlLabel control={<Switch checked={switched} onChange={(e) => {setSwitched(e.target.checked)}} />} label="Is Switched" />
                {/* <FormControl>
                    <InputLabel></InputLabel>
                    <Select>

                    </Select>
                </FormControl> */}
            </FormGroup>
        </Box>
    );
};

export default Form1;
