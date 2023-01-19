import React from 'react';
import './landingPage.css';
import logo from './pokeball.png';
import background from './background.jpeg';

export default function LandingPage() {
  return (
    <div className="landing-page" style={{ backgroundImage: `url(${background})` }}>
      <img src={logo} alt="Logo" className="logo" />
      {/* make a button with className "enter-button", text Enter, that goes to "/home" */}
      <a href="/home" >
        <button className="enter-button" type="button">Enter</button>
      </a>
    </div>
  );
}


