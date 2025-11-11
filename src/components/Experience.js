import React from 'react';
import '../styles/Experience.css';

function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Frontend & SharePoint Developer',
      company: 'Bitwise India',
      period: '2021 - Present',
      responsibilities: [
        'Developed enterprise-scale Angular applications integrated with SharePoint and Power Automate',
        'Designed dynamic, mobile-responsive UIs using Angular, React, and Bootstrap',
        'Integrated SharePoint REST APIs for CRUD operations and real-time data rendering',
        'Built reusable React-based SPFx web parts for modular, performance-optimized solutions',
        'Automated business workflows using Power Automate and Power Apps',
        'Managed Git version control, participated in Agile ceremonies, and handled UAT + deployment'
      ]
    },
    
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div className="timeline-dot"></div>
              <div className="experience-content">
                <h3>{exp.title}</h3>
                <p className="company">{exp.company}</p>
                <p className="period">{exp.period}</p>
                <ul className="responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
