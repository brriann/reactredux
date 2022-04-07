import { lazy } from 'react';

const FormPage = lazy(() => import('./pages/FormPage'));
const LayoutPage = lazy(() => import('./pages/LayoutPage'));
const SplashPage = lazy(() => import('./pages/SplashPage'));
const WidgetPage = lazy(() => import('./pages/WidgetPage'));

export const routes = [
    {
        path: '/',
        name: 'Splash',
        component: <SplashPage />
    },
    {
        path: '/layout',
        name: 'Layout',
        component: <LayoutPage />
    },
    {
        path: '/form',
        name: 'Form',
        component: <FormPage />
    },
    {
        path: '/widget',
        name: 'Widget',
        component: <WidgetPage />
    },
];