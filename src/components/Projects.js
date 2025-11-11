import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'PuraTrip - Android Travel App',
      description: 'Native Android application built with Kotlin featuring trip planning, destination discovery, and itinerary management. Demonstrates MVVM architecture, REST API integration, and material design patterns.',
      technologies: ['Kotlin', 'Android', 'MVVM Architecture', 'REST APIs', 'Material Design'],
      link: 'https://github.com/yashsalunke/PuraTrip',
      image: '✈️'
    },
    {
      id: 2,
      title: 'Face Recognition Based Attendance System (FRBAS)',
      description: 'Machine learning project using Python for automated attendance tracking via facial recognition. Demonstrates computer vision, OpenCV integration, database design, and real-time processing capabilities.',
      technologies: ['Python', 'OpenCV', 'Face Recognition', 'Machine Learning', 'Database'],
      link: 'https://github.com/yashsalunke/FRBAS',
      image: '�'
    },
    {
      id: 3,
      title: 'MapMitra',
      description: 'Native Android application built with Kotlin showcasing location-based services and mapping integration. Demonstrates practical usage of map libraries, location permissions, and geolocation features.',
      technologies: ['Kotlin', 'Android', 'Maps API', 'Location Services', 'Material Design'],
      link: 'https://github.com/yashsalunke/MapMitra',
      image: '🗺️'
    },
    {
      id: 4,
      title: 'MySocialPlatform',
      description: 'Full-featured social networking application built with Kotlin for Android. Demonstrates user authentication, real-time messaging, feed functionality, and social interactions using modern Android architecture.',
      technologies: ['Kotlin', 'Android', 'Firebase', 'Real-time DB', 'User Authentication'],
      link: 'https://github.com/yashsalunke/MySocialPlatform',
      image: '👥'
    },
    {
      id: 5,
      title: 'BookHub',
      description: 'Android application for book discovery and management built with Kotlin. Features book search, library management, and user ratings. Demonstrates integration with book APIs and local persistence.',
      technologies: ['Kotlin', 'Android', 'REST APIs', 'Room Database', 'Material Design'],
      link: 'https://github.com/yashsalunke/BookHub',
      image: '📚'
    },
    {
      id: 6,
      title: 'Rock Paper Scissors Game',
      description: 'Interactive JavaScript game demonstrating fundamental web development concepts. Includes game logic, user interaction handling, score tracking, and responsive UI design.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'DOM Manipulation', 'Game Logic'],
      link: 'https://github.com/yashsalunke/RockPaperScissorGame',
      image: '�'
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
