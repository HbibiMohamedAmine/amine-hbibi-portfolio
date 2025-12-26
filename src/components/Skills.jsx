import React from 'react';
import './Skills.css';
import { skills } from '../data/portfolioData';

const Skills = () => {
  const categories = [...new Set(skills.map(skill => skill.category))];
  
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="animate-on-scroll">Skills & Technologies</h2>
          <p className="section-subtitle animate-on-scroll">
            Modern tech stack for building exceptional web applications
          </p>
        </div>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={skill.id} 
              className="skill-card glass-card animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-header">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-category">{skill.category}</p>
                </div>
              </div>
              
              <p className="skill-description">{skill.description}</p>
              
              <div className="skill-level">
                <div className="level-bar">
                  <div 
                    className="level-fill" 
                    style={{ width: `${skill.level}%` }}
                    data-level={skill.level}
                  ></div>
                </div>
                <span className="level-text">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-categories">
          <h3 className="categories-title animate-on-scroll">Tech Categories</h3>
          <div className="categories-list">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="category-badge animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
