import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a frontend-focused SharePoint Developer with 4+ years of experience building dynamic, 
              enterprise-scale web applications. My expertise spans Angular, React, and SharePoint development 
              with a strong focus on responsive UI design and workflow automation.
            </p>
            <p>
              At Bitwise India, I've developed enterprise Angular applications integrated with SharePoint and 
              Power Automate, built modern React-based SPFx web parts, and designed dynamic mobile-responsive 
              interfaces. I excel at converting complex business requirements into scalable, user-centric solutions 
              within Agile environments.
            </p>
            <p>
              My approach combines technical expertise with a deep understanding of modern frontend principles, 
              REST APIs, and enterprise architecture. I'm committed to writing clean, maintainable code and 
              delivering solutions that impact business outcomes.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <h3>4+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
