import React from 'react';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Yash Salunke</h3>
            <p>Frontend & SharePoint Developer | Enterprise Solutions</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Me</h4>
            <ul>
              <li><a href="https://github.com/yashsalunke" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://linkedin.com/in/yashsalunke" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://x.com/yash_salunke_" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Yash Salunke. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
