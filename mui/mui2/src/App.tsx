import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
// import { ThemeProvider } from '@mui/material/styles';

import './App.css';
import { CssBaseline } from '@mui/material';

import { useThemeContext } from './themes/themeContext';
// import themeDark from './assets/theme-dark';
// import themeLight from './assets/theme';

import routes from './routes';

const App = () => {
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
    // <ThemeProvider theme={darkTheme ? themeDark : themeLight}>
    <>
      <CssBaseline />
      <Routes>
        {routes.map((r) => (
          <Route path={r.route} element={r.component} key={r.key} />
        ))}
      </Routes>
    </>
    // </ThemeProvider>
  );
};

export default App;
