import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send email via backend)
    console.log('Form submitted:', formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities. 
              Feel free to reach out!
            </p>
            <div className="contact-details">
              <div className="detail-item">
                <span className="label">Email:</span>
                <a href="mailto:yash.salunke2024@gmail.com">yash.salunke2024@gmail.com</a>
              </div>
              <div className="detail-item">
                <span className="label">Phone:</span>
                <a href="tel:+917057131346">+91 7057131346</a>
              </div>
              <div className="detail-item">
                <span className="label">Location:</span>
                <span>India</span>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/yashsalunke" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/yashsalunke" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://x.com/yash_salunke_" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
