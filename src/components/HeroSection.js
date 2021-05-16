import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/home.mp4' autoPlay loop muted />
      <h1>Explore Games!</h1>
      <p>Browse, test and chat about games.</p>
      <div className='hero-btns'>
      </div>
    </div>
  );
}

export default HeroSection;