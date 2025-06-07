import React, { useState, useEffect } from 'react';
import './App.css';

import {
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  Menu,
  X,
  User,
  Briefcase,
  GraduationCap,
  Code,
  FolderOpen,
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(elementId);
      setIsMenuOpen(false);
    }
  };

  const skills = [
    { category: 'Languages', items: ['JavaScript', 'HTML5', 'CSS3', 'Python', 'PHP'] },
    { category: 'Frameworks & Libraries', items: ['React', 'Firebase', 'Node.js'] },
    { category: 'Tools & Platforms', items: ['Git', 'XAMPP', 'MySQL', 'VS Code'] }
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Built a full-featured e-commerce platform using React, Node.js, and MongoDB featuring product browsing, user authentication, and payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      features: ['Product Listings', 'Cart System', 'User Login', 'Payment Integration']
    },
    {
      title: 'Task Management App',
      description: 'Created a task management tool with drag-and-drop support, allowing users to track daily progress and team collaboration.',
      tech: ['React', 'Firebase', 'Material UI'],
      features: ['Task Categories', 'Drag-and-Drop', 'Realtime Updates']
    },
    {
      title: 'KED Online Portal',
      description: 'Developed a web portal for college departments using the XAMPP stack. The system manages internal documentation and notices.',
      tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'XAMPP'],
      features: ['Admin Panel', 'CRUD Operations', 'Document Uploads']
    }
  ];

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <span>Sohan H G</span>
          </div>
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <button onClick={() => scrollTo('home')} className={activeSection === 'home' ? 'active' : ''}>
              <User size={18} /> Home
            </button>
            <button onClick={() => scrollTo('about')} className={activeSection === 'about' ? 'active' : ''}>
              <User size={18} /> About
            </button>
            <button onClick={() => scrollTo('experience')} className={activeSection === 'experience' ? 'active' : ''}>
              <Briefcase size={18} /> Experience
            </button>
            <button onClick={() => scrollTo('projects')} className={activeSection === 'projects' ? 'active' : ''}>
              <FolderOpen size={18} /> Projects
            </button>
            <button onClick={() => scrollTo('contact')} className={activeSection === 'contact' ? 'active' : ''}>
              <Mail size={18} /> Contact
            </button>
          </div>
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Sohan H G</h1>
            <h2>Web Developer | Designer | Creative Thinker</h2>
            <p>
              I'm a Computer Science student passionate about designing and developing modern web
              applications. Always exploring new tools, and turning ideas into interactive experiences.
            </p>
            <div className="hero-buttons">
              <button onClick={() => scrollTo('projects')} className="btn-primary">
                View My Work
              </button>
              <button onClick={() => scrollTo('contact')} className="btn-secondary">
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-container">
            </div>
          </div>
        </div>
        <button onClick={() => scrollTo('about')} className="scroll-indicator" aria-label="Scroll to About section">
          <ChevronDown size={24} />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>I'm currently pursuing my Bachelor's degree in Computer Science at Malnad College of Engineering. I'm a self-motivated learner and builder with a love for full-stack development, especially using React, PHP, and MySQL.</p>

              <div className="education">
                <h3><GraduationCap size={20} /> Education</h3>
                <div className="education-item">
                  <h4>B.E. Computer Science & Engineering</h4>
                  <p>Malnad College of Engineering (2023 - 2026)</p>
                  <span>Focused on Web Development, UI/UX Design, and Backend Integration</span>
                </div>
              </div>

              <div className="languages">
                <h3>Languages</h3>
                <div className="language-list">
                  <div className="language-item"><strong>English:</strong> Fluent</div>
                  <div className="language-item"><strong>Kannada:</strong> Native</div>
                  <div className="language-item"><strong>Hindi:</strong> Conversational</div>
                </div>
              </div>
            </div>

            <div className="skills-section">
              <h3><Code size={20} /> Technical Skills</h3>
              {skills.map((skillGroup, index) => (
                <div key={index} className="skill-group">
                  <h4>{skillGroup.category}</h4>
                  <div className="skill-tags">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2><Briefcase size={24} /> Project Experience</h2>
          <p>As a student developer, I have actively built and contributed to several projects that enhance my understanding of full-stack development. These include academic projects, college tools, and personal experiments.</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2><FolderOpen size={24} /> Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <ExternalLink size={20} />
                </div>
                <p>{project.description}</p>
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="tech-stack">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-text">
              <p>Open to internships, collaborations, and freelance opportunities. Let’s connect and create something amazing together!</p>
            </div>
            <div className="contact-info">
              <div className="contact-item"><Mail size={20} /><a href="mailto:sohanhg@example.com">sohanhg@example.com</a></div>
              <div className="contact-item"><Phone size={20} /><a href="tel:+915551234567">6360897382</a></div>
              <div className="contact-item"><MapPin size={20} /><span>Hassan, Karnataka</span></div>
              <div className="contact-item"><Linkedin size={20} /><a href="https://linkedin.com/in/sohanhg" target="_blank" rel="noopener noreferrer">linkedin.com/in/sohanhg</a></div>
              <div className="contact-item"><Github size={20} /><a href="https://github.com/sohanhg" target="_blank" rel="noopener noreferrer">github.com/sohanhg</a></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Sohan H G. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
