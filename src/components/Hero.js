import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Yash Salunke</h1>
        <p className="hero-subtitle">SharePoint Developer | Angular Frontend | SPFx | Power Platform | React</p>
        <p className="hero-description">
          4+ years building enterprise-scale web applications with Angular, React, and SharePoint.
          Specializing in responsive UI development, workflow automation, and modern frontend solutions.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Get In Touch</a>
          <a href="#projects" className="btn btn-secondary">View My Work</a>
        </div>
      </div>
      <div className="hero-socials">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
  <a href="https://x.com/yash_salunke_" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
      </div>
    </section>
  );
}

export default Hero;
