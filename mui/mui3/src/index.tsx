import { CssBaseline } from '@mui/material';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const container = document.getElementById('root');
//@ts-ignore
const root = createRoot(container);
// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis

root.render(
  <React.StrictMode>
    <>
      <BrowserRouter>
          <CssBaseline />
          <App />
      </BrowserRouter>
    </>
  </React.StrictMode>,
  
);
