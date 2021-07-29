import React, { Fragment, Suspense, lazy, useState, useCallback } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import theme from './theme';
import GlobalStyles from './GlobalStyles';

import Header from './shared/Header'
import Footer from './shared/Footer'

const HomePageComponent = lazy(() => import("./pages/HomePage"));
const Page1Component = lazy(() => import("./pages/Page1"));
const Page2Component = lazy(() => import("./pages/Page2"));
const Page3Component = lazy(() => import("./pages/Page3"));


const App = () => {

  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const handleMobileDrawerOpen = useCallback(() => {
    setIsMobileDrawerOpen(true);
  }, [setIsMobileDrawerOpen]);

  const handleMobileDrawerClose = useCallback(() => {
    setIsMobileDrawerOpen(false);
  }, [setIsMobileDrawerOpen]);

  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <Header
          mobileDrawerOpen={isMobileDrawerOpen}
          handleMobileDrawerOpen={handleMobileDrawerOpen}
          handleMobileDrawerClose={handleMobileDrawerClose}
        />
        <Suspense fallback={<Fragment />}>
          <Switch>
            <Route path="/page1">
              <Page1Component />
            </Route>
            <Route path="/page2">
              <Page2Component />
            </Route>
            <Route path="/page3">
              <Page3Component />
            </Route>
            <Route exact path="/">
              <HomePageComponent />
            </Route>
          </Switch>
        </Suspense>
        <Footer />
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
