import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Layout} />
      </Switch>
    </HashRouter>
  );
}

export default App;
