import React from 'react';
import './Experience.css';
import { experience } from '../data/portfolioData';

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="animate-on-scroll">Work Experience</h2>
          <p className="section-subtitle animate-on-scroll">
            Professional journey and key achievements
          </p>
        </div>
        
        <div className="timeline">
          {experience.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} animate-on-scroll`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
              
              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <div className="timeline-icon">💼</div>
                  <div className="timeline-info">
                    <h3 className="timeline-title">{exp.title}</h3>
                    <p className="timeline-company">{exp.company}</p>
                    <div className="timeline-meta">
                      <span className="meta-item">📅 {exp.period}</span>
                      <span className="meta-item">📍 {exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="timeline-description">{exp.description}</p>
                
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="timeline-achievements">
                    <h4 className="achievements-title">Key Achievements:</h4>
                    <ul className="achievements-list">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="achievement-item">
                          <span className="achievement-bullet">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
