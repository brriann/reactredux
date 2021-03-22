import React, { Fragment, Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import theme from './theme';

const HomePageComponent = lazy(() => import("./pages/HomePage"));
const Page1Component = lazy(() => import("./pages/Page1"));
const Page2Component = lazy(() => import("./pages/Page2"));
const Page3Component = lazy(() => import("./pages/Page3"));

function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
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
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
