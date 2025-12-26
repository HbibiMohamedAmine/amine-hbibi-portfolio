import React, { useEffect, useState } from 'react';
import './Hero.css';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <div className="hero-text">
          <div className="hero-tag">
            <span className="tag-icon">⚡</span>
            <span>Available for Opportunities</span>
          </div>
          
          <h1 className="hero-title">
            {personalInfo.name}
          </h1>
          
          <p className="hero-role">
            {personalInfo.role}
          </p>
          
          <p className="hero-headline">
            {personalInfo.headline}
          </p>
          
          <div className="hero-location">
            <span className="location-icon">📍</span>
            <span>{personalInfo.location}</span>
          </div>
          
          <div className="hero-cta">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              <span>View Projects</span>
              <span className="btn-arrow">→</span>
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              <span>Contact Me</span>
            </button>
          </div>
          
          <div className="hero-social">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="currentColor"/>
              </svg>
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" fill="currentColor"/>
              </svg>
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="social-link"
              aria-label="Email"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="hero-decoration">
          <div className="floating-card card-1">
            <div className="card-icon">⚛️</div>
            <div className="card-text">React.js</div>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">🟢</div>
            <div className="card-text">Node.js</div>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">🍃</div>
            <div className="card-text">MongoDB</div>
          </div>
          <div className="floating-card card-4">
            <div className="card-icon">🚀</div>
            <div className="card-text">Express</div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll to explore</p>
      </div>
    </section>
  );
};

export default Hero;
