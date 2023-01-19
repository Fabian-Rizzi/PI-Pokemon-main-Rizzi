import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/landingPage/landingPage';
import Home from './components/home/home'


function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <LandingPage />
      </Route>

      <Route exact path="/home">
        <Home />
      </Route>
    </div>
  );
}

export default App;
