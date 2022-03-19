import React from 'react';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from './components/layout/Header';

const theme = createTheme();

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Header />
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
