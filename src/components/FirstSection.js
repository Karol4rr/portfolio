import React from 'react';
import '../App.css';
import './FirstSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>React Junior Developer</h1>
      <p>Presents Portfolio</p>
    </div>
  );
}

export default HeroSection;
