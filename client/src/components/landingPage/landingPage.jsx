import React from 'react';
import './landingPage.css';
import logo from './pokeball.png';
import { Link } from 'react-router-dom';
import background from './background.jpeg';

export default function LandingPage() {
  return (
    <div className="landing-page" style={{ backgroundImage: `url(${background})` }}>
      <img src={logo} alt="Logo" className="logo" />
      <Link to="/home">
        <button className="enter-button" type="button">Enter</button>
      </Link>
    </div>
  );
}


