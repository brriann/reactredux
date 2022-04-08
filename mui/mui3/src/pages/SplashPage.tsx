import React from 'react';
import Banner from '../components/splash/Banner';
import SplashGrid1 from '../components/splash/SplashGrid1';
import PageParent from './PageParent';

function SplashPage() {
    return (
        <PageParent isSplash>
            <Banner />
            <SplashGrid1 />
        </PageParent>
    );
}

export default SplashPage;