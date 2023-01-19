import './App.css';
import React from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import LandingPage from './components/landingPage/landingPage';
import Home from './components/home/home'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>

      <Route exact path="/home">
        <Home />
      </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
