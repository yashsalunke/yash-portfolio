import React from 'react';
import '../styles/Skills.css';

function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'Angular', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap']
    },
    {
      category: 'SharePoint & Platform',
      skills: ['SPFx', 'Power Automate', 'Power Apps', 'SharePoint Online', 'REST APIs', 'Microsoft 365']
    },
    {
      category: 'Tools & Technologies',
      skills: ['Git', 'Postman', 'VS Code', 'Tableau', 'Microsoft Teams', 'CI/CD', 'Agile']
    },
    {
      category: 'Specializations',
      skills: ['Responsive Design', 'Workflow Automation', 'Enterprise Apps', 'UI/UX Development', 'Role-based Permissions', 'Real-time Data Integration']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <h3>{category.category}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
