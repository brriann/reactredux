import { Stack } from '@mui/material';

import React from 'react';
import GridLayout1 from '../components/grid/GridLayout1';
import GridLayout2 from '../components/grid/GridLayout2';
import StackLayout1 from '../components/stack/StackLayout1';

function LayoutPage() {
    return (
        <Stack spacing={2}>
            <GridLayout1 />
            <GridLayout2 />
            <StackLayout1 />
        </Stack>
    );
}

export default LayoutPage;