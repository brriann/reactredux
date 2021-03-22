import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="App">
        <h1>App goes here!</h1>
        <Counter />
      </div>
    </React.Fragment>
  );
}

export default App;
