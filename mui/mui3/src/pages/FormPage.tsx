import { Grid } from '@mui/material';
import React from 'react';
import Form1 from '../components/form/Form1';
import Form2 from '../components/form/Form2';
import Form3 from '../components/form/Form3';
import Form4 from '../components/form/Form4';
import PageParent from './PageParent';

function FormPage() {
    return (
        <PageParent>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Form1 />
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Form2 />
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Form3 />
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Form4 />
                </Grid>
            </Grid>
        </PageParent>
    );
}

export default FormPage;