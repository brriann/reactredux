import React from 'react';
import GridLayout1 from '../components/grid/GridLayout1';
import GridLayout2 from '../components/grid/GridLayout2';
import StackLayout1 from '../components/stack/StackLayout1';
import StackLayout3 from '../components/stack/StackLayout3';
import PageParent from './PageParent';

function LayoutPage() {
    return (
        <PageParent>
            <GridLayout1 />
            <GridLayout2 />
            <StackLayout1 />
            <StackLayout3 />
        </PageParent>
    );
}

export default LayoutPage;