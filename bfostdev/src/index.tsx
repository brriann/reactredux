import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import App from './App';
import Themes from "./themes";
import { store } from './app/store';
import * as serviceWorker from './serviceWorker';
import { LayoutProvider } from './LayoutContext';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <LayoutProvider>
        <ThemeProvider theme={Themes.default}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </LayoutProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
