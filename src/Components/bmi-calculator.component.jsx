import React, { useState } from 'react';

import './bmi-calculator.styles.css';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { 
    sickUnderText,
    notableUnderText,
    mildUnderText,
    normalText, 
    mildOverText,
    notableOverText,
    seriousOverText, 
    morbidObesityText,
    headerBmiText,
    giveHeightText,
    giveWeightText,
    calculateText,
    yourBmiText,
    yourHealthyText,
    errorText
} from '../Texts/texts.js';

const BmiCalculator = () => {
    const [bmi, setBmi] = useState();
    const [health, setHealth] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();

    const calculateBmi = () => {
        var values = (
            [Number(weight) / Number(height) / Number(height)] * 10000
        ).toFixed(2);
        setBmi(values);
        console.log(values);  
        
        if (values < 15) {
            setHealth(sickUnderText);
        } else if (values >= 15 && values <= 17.99) {
            setHealth(notableUnderText);
        } else if (values >= 18 && values <= 18.99) {
            setHealth(mildUnderText);
        } else if (values >= 19 && values <= 24.99) {
            setHealth(normalText);
        } else if (values >= 25 && values <= 29.99) {
            setHealth(mildOverText);
        } else if (values >= 30 && values <= 34.99) {
            setHealth(notableOverText);
        } else if (values >= 35 && values <= 39.99) {
            setHealth(seriousOverText);
        } else if (values >= 40) {
            setHealth(morbidObesityText);
        } else {
            setHealth(errorText);
        };
    }

    return (
        <div className='bmi-calculator'>
            <h2 className='header'>{headerBmiText}</h2>
            <Box
                className='box' 
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off">
            <div className='height'>
                <TextField
                    size='small'
                    id="standard-basic" 
                    label={giveHeightText}
                    variant="standard"
                    onChange={(event) => setHeight(event.target.value)}
                    type='number' 
                    className='height-text' 
                    min='1'
                />
            </div>
            <div className='weight'>
                <TextField
                    size='small'
                    id="standard-basic" 
                    label={giveWeightText}
                    variant="standard"
                    onChange={(event) => setWeight(event.target.value)}
                    type='number'
                    className='weight-text' 
                    min='1'
                />
            </div>
            </Box>
            <Stack direction="row" spacing={2}>
            <Button
                className="calculate"
                variant="contained"
                type='submit'
                onClick={calculateBmi}>
                {calculateText}
            </Button>
            </Stack>
            
            {bmi && (
                <div className='values'>
                    <h3 className='bmi-text'> {yourBmiText} <br/> {bmi} </h3>
                    <h3 className='health-text'> {yourHealthyText} <br/> {health} </h3>
                </div>
            )}
        
        </div>
    );
}
export default BmiCalculator;