import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import './App.css';
import { useThemeContext } from './themes/themeContext';
import themeDark from './themes/theme-dark';
import themeLight from './themes/theme-light';
import { CssBaseline } from '@mui/material';

const App: React.FC = () => {
  const { pathname } = useLocation();
  const { themeState, themeDispatch } = useThemeContext();
  const { darkTheme } = themeState;

  // scroll to top of page on route change
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = 0;
    }
  }, [pathname]);

  return (
    <ThemeProvider theme={darkTheme ? themeDark : themeLight}>
      <CssBaseline />
      <Routes>
        <Route path="*" element={<Navigate to="/splash" />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
