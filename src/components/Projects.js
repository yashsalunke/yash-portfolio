import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Yash Portfolio',
      description: 'Full-stack React portfolio showcasing professional projects, skills, and experience. Features responsive design, smooth animations, contact form integration, and GitHub repository integration for live project showcase.',
      technologies: ['React', 'JavaScript', 'CSS3', 'Responsive Design', 'GitHub Pages'],
      link: 'https://github.com/yashsalunke/yash-portfolio',
      image: '💼'
    },
    {
      id: 2,
      title: 'ASP.NET + Angular Full-Stack App',
      description: 'Enterprise-grade full-stack application demonstrating backend (ASP.NET) and frontend (Angular) integration. Includes REST API architecture, data persistence, component-based UI, and material design patterns.',
      technologies: ['ASP.NET', 'Angular', 'TypeScript', 'C#', 'Material UI'],
      link: 'https://github.com/yashsalunke/ASP_DotNet_Angular',
      image: '🏗️'
    },
    {
      id: 3,
      title: 'Face Recognition Based Attendance System (FRBAS)',
      description: 'Machine learning project using Python for automated attendance tracking via facial recognition. Demonstrates computer vision, OpenCV integration, database design, and real-time processing capabilities.',
      technologies: ['Python', 'OpenCV', 'Face Recognition', 'Machine Learning', 'Database'],
      link: 'https://github.com/yashsalunke/FRBAS',
      image: '�'
    },
    {
      id: 4,
      title: 'PuraTrip - Android Travel App',
      description: 'Native Android application built with Kotlin featuring trip planning, destination discovery, and itinerary management. Demonstrates MVVM architecture, REST API integration, and material design patterns.',
      technologies: ['Kotlin', 'Android', 'MVVM Architecture', 'REST APIs', 'Material Design'],
      link: 'https://github.com/yashsalunke/PuraTrip',
      image: '✈️'
    },
    {
      id: 5,
      title: 'Angular CRUD with Material UI',
      description: 'Feature-rich Angular application demonstrating CRUD operations with Material Design components. Showcases reactive forms, data binding, component architecture, and modern UI patterns.',
      technologies: ['Angular', 'TypeScript', 'Material UI', 'Reactive Forms', 'Bootstrap'],
      link: 'https://github.com/yashsalunke/Angular_CRUD_MaterialUI',
      image: '�'
    },
    {
      id: 6,
      title: 'GitHub Pages Portfolio',
      description: 'Professional personal website built on GitHub Pages showcasing portfolio, projects, and professional presence. Serves as central hub for resume, live demos, and contact information.',
      technologies: ['HTML5', 'CSS3', 'GitHub Pages', 'Responsive Design', 'SEO'],
      link: 'https://github.com/yashsalunke/yashsalunke.github.io',
      image: '🌐'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">{project.image}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
