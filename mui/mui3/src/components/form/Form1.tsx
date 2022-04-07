import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, ListItemText, MenuItem, OutlinedInput, Radio, RadioGroup, Select, SelectChangeEvent, Switch, TextField, Theme, useTheme } from '@mui/material';
import React, { useState } from 'react';

// SINGLE-SELECT

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

// MULTI-SELECT

const toppingsOptions = [
    'Pepperoni',
    'Olives',
    'Red Onions',
    'Buffalo Sauce',
    'Grapes',
    'Fruit Salad',
    'Orange Slices',
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const Form1: React.FC = () => {
    const theme = useTheme();

    const [name, setName] = useState('');
    const [currency, setCurrency] = useState('USD');
    const [checked, setChecked] = useState(false);
    const [switched, setSwitched] = useState(false);
    const [toppings, setToppings] = useState<string[]>([]);
    const [gender, setGender] = useState('male');

    // MULTI-SELECT
    const handleChange = (event: SelectChangeEvent<typeof toppings>) => {
        const { target: { value }} = event;
        setToppings(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        )
    };

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '30ch'},
                '& .MuiFormControl-root': { m: 1, width: '30ch'},
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
                <FormControlLabel 
                    style={{ pointerEvents: 'none'}}
                    control={
                        <Checkbox 
                            checked={checked} 
                            onChange={(e) => {setChecked(e.target.checked)}} 
                            style={{ pointerEvents: 'auto'}}
                        />
                    } 
                    label="Is Checked" 
                />
                <FormControlLabel
                    style={{ pointerEvents: 'none'}} 
                    control={
                        <Switch 
                            checked={switched} 
                            onChange={(e) => {setSwitched(e.target.checked)}}
                            style={{ pointerEvents: 'auto'}}
                        />
                    } 
                    label="Is Switched" 
                />
                <FormControl>
                    <InputLabel id="multi-select-label">Toppings</InputLabel>
                    <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={toppings}
                        onChange={handleChange}
                        input={<OutlinedInput label="Toppings" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                    >
                        {toppingsOptions.map(t => (
                            <MenuItem key={t} value={t}>
                                <Checkbox checked={toppings.indexOf(t) > -1} />
                                <ListItemText primary={t} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
            </FormGroup>
        </Box>
    );
};

export default Form1;
