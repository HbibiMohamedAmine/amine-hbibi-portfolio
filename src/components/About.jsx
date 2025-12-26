import React from "react";
import "./About.css";
import { personalInfo, education } from "../data/portfolioData";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="animate-on-scroll">About Me</h2>
          <p className="section-subtitle animate-on-scroll">
            Full Stack Developer with a passion for building exceptional digital
            experiences
          </p>
        </div>

        <div className="about-content">
          <div className="about-text glass-card animate-on-scroll">
            <div className="about-intro">
              <div className="intro-icon">👨‍💻</div>
              <p className="intro-text">{personalInfo.bio}</p>
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🎓</div>
                <div className="highlight-content">
                  <h3>Education Excellence</h3>
                  <p>
                    Bachelor's Degree in Computer Systems Engineering (IoT) with
                    High Honors
                  </p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">💼</div>
                <div className="highlight-content">
                  <h3>Professional Experience</h3>
                  <p>
                    Specialized in MERN stack development with real-world
                    project experience
                  </p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">🤖</div>
                <div className="highlight-content">
                  <h3>IoT & Web Integration</h3>
                  <p>
                    Combining modern web technologies with industrial IoT
                    systems
                  </p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">⚡</div>
                <div className="highlight-content">
                  <h3>Clean Code Philosophy</h3>
                  <p>
                    Building scalable, maintainable, and production-ready
                    applications
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-card glass-card animate-on-scroll">
              <div className="stat-number">Full Stack</div>
              <div className="stat-label">Frontend & Backend</div>
              <div className="stat-icon">🧩</div>
            </div>

            <div className="stat-card glass-card animate-on-scroll">
              <div className="stat-number">Custom</div>
              <div className="stat-label">Web Solutions</div>
              <div className="stat-icon">🛠️</div>
            </div>

            <div className="stat-card glass-card animate-on-scroll">
              <div className="stat-number">Fast</div>
              <div className="stat-label">Delivery & Support</div>
              <div className="stat-icon">⚡</div>
            </div>

            <div className="stat-card glass-card animate-on-scroll">
              <div className="stat-number">Reliable</div>
              <div className="stat-label">Client-Oriented Work</div>
              <div className="stat-icon">🤝</div>
            </div>
          </div>
        </div>

        <div className="about-education">
          <h3 className="education-title animate-on-scroll">Education</h3>
          {education.map((edu) => (
            <div
              key={edu.id}
              className="education-card glass-card animate-on-scroll"
            >
              <div className="education-header">
                <div className="education-icon">🎓</div>
                <div className="education-info">
                  <h4>{edu.degree}</h4>
                  <p className="institution">{edu.institution}</p>
                  <div className="education-meta">
                    <span className="period">📅 {edu.period}</span>
                    <span className="grade">🏆 {edu.grade}</span>
                    <span className="location">📍 {edu.location}</span>
                  </div>
                </div>
              </div>
              <p className="education-description">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
