import React, { useState, useEffect } from 'react';
import './App.css';

// Header Component
const Header = ({ activeSection, isMenuOpen, toggleMenu, scrollToSection, isScrolled }) => {
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="logo">Portfolio</a>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map(section => (
              <li key={section}>
                <a 
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                  onClick={() => scrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <a href="#contact" className="btn btn-primary" onClick={() => scrollToSection('contact')}>
              <i className="fas fa-paper-plane"></i> Start Project
            </a>
          </div>
        </nav>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <i className="fas fa-circle"></i>
              Available for new projects
            </div>
            <h1 className="hero-title">
              Crafting Digital Excellence
            </h1>
            <p className="hero-description">
              Senior Full-Stack Developer specializing in creating scalable, high-performance web applications. 
              Transforming ideas into exceptional digital experiences with modern technologies and innovative solutions.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({behavior: 'smooth'})}>
                <i className="fas fa-briefcase"></i> View Portfolio
              </a>
              <a href="#contact" className="btn btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}>
                <i className="fas fa-envelope"></i> Get In Touch
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-image">
                <div className="profile-image-content">
                  <i className="fas fa-user-tie"></i>
                </div>
              </div>
              <h3 className="profile-name">Alex Johnson</h3>
              <p className="profile-title">Senior Full-Stack Developer</p>
              <div className="profile-stats">
                <div className="stat">
                  <div className="stat-number">8+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Projects Delivered</div>
                </div>
                <div className="stat">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Component
const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">About Me</p>
          <h2 className="section-title">Passion for Innovation</h2>
          <p className="section-description">
            Dedicated to creating digital solutions that not only meet business objectives but exceed user expectations through exceptional design and performance.
          </p>
        </div>
        <div className="about-content">
          <div className="about-image">
            <div className="about-card">
              <h3 style={{marginBottom: '24px', color: 'var(--gray-800)', fontSize: '28px', fontWeight: '800'}}>My Approach</h3>
              <p style={{color: 'var(--gray-600)', marginBottom: '28px', lineHeight: '1.8'}}>
                I believe in the power of technology to transform businesses and create meaningful impact. 
                Every project is an opportunity to push boundaries and deliver excellence.
              </p>
              <div style={{display: 'flex', alignItems: 'center', gap: '20px', padding: '24px', background: 'var(--primary-light)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(59, 130, 246, 0.1)'}}>
                <div style={{width: '56px', height: '56px', background: 'var(--primary)', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <i className="fas fa-check" style={{color: 'var(--gray-800)', fontSize: '20px'}}></i>
                </div>
                <span style={{fontWeight: '700', color: 'var(--primary)', fontSize: '16px'}}>Currently available for new opportunities</span>
              </div>
            </div>
          </div>
          <div className="about-text">
            <p>
              With over 8 years of experience in full-stack development, I've had the privilege of working 
              with diverse clients ranging from startups to Fortune 500 companies. My journey has taught me 
              that great products are built on a foundation of clean code, user-centric design, and scalable architecture.
            </p>
            <p>
              I specialize in modern JavaScript ecosystems, with deep expertise in React, Node.js, and cloud 
              technologies. My approach combines technical excellence with strategic thinking to deliver 
              solutions that drive real business value.
            </p>
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-code"></i>
                </div>
                <div className="feature-content">
                  <h4>Clean Architecture</h4>
                  <p>Building scalable, maintainable systems with modern development practices and patterns</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <div className="feature-content">
                  <h4>Performance Focused</h4>
                  <p>Optimizing for speed, efficiency, and exceptional user experiences across all devices</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="feature-content">
                  <h4>Collaborative Approach</h4>
                  <p>Working closely with teams and stakeholders to ensure project success and alignment</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <div className="feature-content">
                  <h4>Innovative Solutions</h4>
                  <p>Creative problem-solving for complex technical challenges and business requirements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Component
const Skills = () => {
  const skills = {
    frontend: [
      { name: 'React', level: 96 },
      { name: 'TypeScript', level: 92 },
      { name: 'JavaScript', level: 95 },
      { name: 'HTML/CSS', level: 94 }
    ],
    backend: [
      { name: 'Node.js', level: 92 },
      { name: 'Python', level: 88 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 87 }
    ],
    tools: [
      { name: 'Git', level: 96 },
      { name: 'Docker', level: 84 },
      { name: 'AWS', level: 82 },
      { name: 'Figma', level: 78 }
    ]
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Technical Expertise</p>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-description">
            A comprehensive overview of my technical skills and proficiency levels across modern development technologies and tools.
          </p>
        </div>
        <div className="skills-grid">
          <div className="skill-category">
            <div className="skill-header">
              <div className="skill-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3 className="skill-title">Frontend</h3>
            </div>
            <div className="skill-list">
              {skills.frontend.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <div className="skill-header">
              <div className="skill-icon">
                <i className="fas fa-server"></i>
              </div>
              <h3 className="skill-title">Backend</h3>
            </div>
            <div className="skill-list">
              {skills.backend.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <div className="skill-header">
              <div className="skill-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3 className="skill-title">Tools & Technologies</h3>
            </div>
            <div className="skill-list">
              {skills.tools.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Experience Component
const Experience = () => {
  const experiences = [
    {
      period: '2020 - Present',
      title: 'Senior Full-Stack Developer',
      company: 'TechInnovate Inc.',
      description: 'Lead development of enterprise web applications using React and Node.js. Mentored junior developers and implemented CI/CD pipelines. Delivered 15+ projects with 99.9% uptime and improved application performance by 60%.'
    },
    {
      period: '2018 - 2020',
      title: 'Full-Stack Developer',
      company: 'Digital Solutions Ltd.',
      description: 'Developed and maintained multiple client projects. Worked with various technologies including Vue.js, Express, and MongoDB. Improved application performance by 40% and led the migration to microservices architecture.'
    },
    {
      period: '2016 - 2018',
      title: 'Frontend Developer',
      company: 'WebCraft Studio',
      description: 'Focused on creating responsive and accessible user interfaces. Collaborated with designers to implement pixel-perfect designs. Built 20+ websites for clients across various industries with a focus on performance and user experience.'
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Career Journey</p>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-description">
            My career path and professional experiences that have shaped my expertise and approach to software development.
          </p>
        </div>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-briefcase"></i>
              </div>
              <div className="timeline-content">
                <div className="timeline-period">{exp.period}</div>
                <h3 className="timeline-title">{exp.title}</h3>
                <div className="timeline-company">{exp.company}</div>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Component
const Projects = () => {
    const projects = [
        {
            category: 'E-Commerce Platform',
            title: 'Beechtree.pk',
            image: '/images/beechtree.webp',
            liveUrl: 'https://beechtree.pk/'
        },
        {
            category: 'Web Application',
            title: 'Bixlers',
            image: '/images/bixlers.webp',
            liveUrl: 'https://www.bixlers.com/'
        },
        {
            category: 'Web Application',
            title: 'Daniel Smart',
            image: '/images/daniel-smart.webp',
            liveUrl: 'https://danielsmartmfg.com/'
        },
        {
            category: 'Web Application',
            title: 'HBCL',
            image: '/images/hbcl.webp',
            liveUrl: 'https://hairandbeautycorp.com/'
        },
        {
            category: 'Web Application',
            title: 'Kultured',
            image: '/images/kultured-art.webp',
            liveUrl: 'https://kulturedart.com/'
        },
        {
            category: 'Web Application',
            title: 'Larroude',
            image: '/images/larroude.webp',
            liveUrl: 'https://larroude.com/'
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="section-header">
                    <p className="section-subtitle">Portfolio</p>
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-description">
                        A selection of my recent projects that demonstrate technical expertise, innovative solutions, and attention to detail.
                    </p>
                </div>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image">
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    <img 
                                        alt={project.title}
                                        className="project-image-content"
                                        src={project.image}
                                    />
                                </a>
                            </div>
                            <div className="project-content">
                                <div className="project-category">{project.category}</div>
                                <h3 className="project-title">{project.title}</h3>
                                {/* <div className="project-tech">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">{tech}</span>
                                    ))}
                                </div> */}
                                <div className="project-actions">
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-small">
                                        <i className="fas fa-external-link-alt"></i> Live Demo
                                    </a>
                                    {/* <button className="btn btn-outline btn-small">
                                        <i className="fab fa-github"></i> Source Code
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Contact Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Get In Touch</p>
          <h2 className="section-title">Let's Create Something Amazing</h2>
          <p className="section-description">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3 style={{fontSize: '32px', fontWeight: '900', color: 'var(--gray-800)', marginBottom: '24px'}}>Start a Conversation</h3>
            <p style={{color: 'var(--gray-600)', marginBottom: '48px', fontSize: '18px', lineHeight: '1.7'}}>
              I'm always excited to discuss new opportunities, innovative projects, or potential collaborations. 
              Let's connect and explore how we can work together.
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>alex.johnson@example.com</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>San Francisco, California</p>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-dribbble"></i>
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Subject</label>
              <input
                type="text"
                name="subject"
                className="form-control"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What is this regarding?"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                className="form-control"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project, ideas, or how I can help..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-paper-plane"></i> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#" className="logo">Portfolio</a>
            <p className="footer-description">
              Senior Full-Stack Developer specializing in modern web technologies, scalable architecture, and digital innovation. 
              Passionate about creating exceptional digital experiences that drive business success.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#skills" className="footer-link">Skills</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Connect</h4>
            <ul className="footer-links">
              <li><a href="mailto:alex.johnson@example.com" className="footer-link">Email</a></li>
              <li><a href="tel:+15551234567" className="footer-link">Phone</a></li>
              <li><a href="#" className="footer-link">LinkedIn</a></li>
              <li><a href="#" className="footer-link">GitHub</a></li>
              <li><a href="#" className="footer-link">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Alex Johnson. All rights reserved. | Crafted with passion and precision</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="App">
      <Header 
        activeSection={activeSection} 
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        scrollToSection={scrollToSection}
        isScrolled={isScrolled}
      />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;