import Icon from '@mui/material/Icon';
import { JsxElement } from 'typescript';
import Page from './components/Page';

interface Route {
  name: string;
  key: string;
  icon: any;
  route: string;
  component: JSX.Element;
}

const routes: Route[] = [
  {
    name: 'Dashboard',
    key: 'dashboard',
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: '/dashboard',
    component: <Page />,
  },
  {
    name: 'Forms',
    key: 'forms',
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: '/forms',
    component: <Page />,
  },
  {
    name: 'Tables',
    key: 'tables',
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: '/tables',
    component: <Page />,
  },
  {
    name: 'Widgets',
    key: 'widgets',
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: '/widgets',
    component: <Page />,
  },
];

export default routes;
