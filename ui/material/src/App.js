import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Checkout from './components/checkout/Checkout';
import Pricing from './components/pricing/Pricing';
import Album from './components/album/Album';
import SignIn from './components/signup/SignIn';
import SignUp from './components/signup/SignUp';
import Test1 from './components/Test1';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route exact path="/">
            <h4>root home page</h4>
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/album">
            <Album />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/test1">
            <Test1 />
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
