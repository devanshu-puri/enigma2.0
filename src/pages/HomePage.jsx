import React from 'react';
import ContactForm from '../components/ContactForm';
import Events from '../components/Events';

// --- Data for the Code-Based Domains Section with CORRECTED Images ---
const domainData = [
  // The image paths below now match your file structure exactly
  { title: "Design", imageSrc: '/assets/domain/d.png', variant: 'light' },
  { title: "Tech", imageSrc: '/assets/domain/t.png', variant: 'yellow' },
  { title: "Social Media & PR Marketing", imageSrc: '/assets/domain/spm.png', variant: 'dark' },
  { title: "Sponsorship & Finance", imageSrc: '/assets/domain/sf.png', variant: 'light' },
  { title: "Content Creation", imageSrc: '/assets/domain/cc.png', variant: 'yellow' },
  { title: "Strategy & Analysis", imageSrc: '/assets/domain/sanda.png', variant: 'dark' },
];

// This DomainCard component is already correct and does not need changes.
// In src/pages/HomePage.jsx, REPLACE the old DomainCard component with this one

// In src/pages/HomePage.jsx, REPLACE the old DomainCard component with this one

const DomainCard = ({ title, imageSrc, variant }) => (
  <div className={`domain-code-card domain-code-card--${variant}`}>
    {/* This new inner wrapper will hold the text content */}
    <div className="domain-card-text-content">
      <div className="domain-card-header">
        <h3 className="domain-code-title">{title}</h3>
      </div>
      <a href="#" className="domain-code-link">
        {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 16 16 12 12 8" /><line x1="8" y1="12" x2="16" y2="12" /></svg> */}
        {/* <span>Learn more</span> */}
      </a>
    </div>
    {/* The image is now a sibling, making it easy to position */}
    <img src={imageSrc} alt={`${title} domain illustration`} className="domain-card-illustration" />
  </div>
);


// --- Main HomePage Component ---
const HomePage = () => {
  return (
    <>
      <header id="home" className="hero-section hero-gradient-background">
        <div className="hero-content">
          <h1>ENIGMA</h1>
          <p className="hero-subtitle">
            WHERE IDEAS IGNITE AND INNOVATION TAKES FLIGHT
          </p>
          <p className="hero-description">
            We are a community of innovators, dreamers, and builders. Join us to
            bring your entrepreneurial visions to life.
          </p>
        </div>
        <div className="hero-image-container">
          <img
            src="/assets/hero.png"
            alt="Hero Illustration"
            className="hero-image"
          />
        </div>
      </header>

      <main>
        <section className="domains-code-section">
          <h2>Domains</h2>
          <p>We work across various domains to foster a culture of innovation and hands-on learning.</p>
          <div className="domains-code-grid">
            {domainData.map(domain => (
              <DomainCard key={domain.title} {...domain} />
            ))}
          </div>
        </section>
        
        <section id="about" className="about-section">
            <div className="section-header">
                <h2 className="section-title yellow-bg">About ECELL</h2>
                <p className="section-subtitle">A vibrant hub where aspiring student entrepreneurs connect, innovate, and build ventures.</p>
            </div>
            <div className="about-content-box">
                <div className="about-column">
                    <p>"Business need to go beyond the interest of their companies to the communities they serve."</p>
                    <p className="quote-author">- RATAN TATA</p>
                </div>
                <div className="about-column">
                    <p>Enigma E-Cell aims to transform itself into a platform to launch the leaders of tomorrow towards the path of success...</p>
                </div>
                <div className="about-column">
                    <p>Opportunities and networks are the two defining factors in the realm of entrepreneurship that makes all the difference...</p>
                </div>
            </div>
        </section>

        <Events />
        
        <section className="testimonials-section">
            <h2>What people say about us</h2>
            <p>Our community's feedback is our greatest asset.</p>
            <div className="gallery">
                <img src="/assets/img1.png" alt="Testimonial 1" />
                <img src="/assets/img2.png" alt="Testimonial 2" />
                <img src="/assets/img3.png" alt="Testimonial 3" />
                <img src="/assets/img4.png" alt="Testimonial 4" />
                <img src="/assets/img5.png" alt="Testimonial 5" />
                <img src="/assets/img6.png" alt="Testimonial 6" />
                <img src="/assets/img7.png" alt="Testimonial 7" />
                <img src="/assets/img8.png" alt="Testimonial 8" />
                <img src="/assets/img9.png" alt="Testimonial 9" />
            </div>
        </section>

        <ContactForm />
      </main>

      <footer className="footer-section">
        <img
          src="/assets/enigma_bottom.png"
          alt="Enigma Footer Logo"
          className="footer-logo-image"
        />
        <p>© 2025 Enigma E-Cell. All Rights Reserved.</p>
       
      </footer>
    </>
  );
};

export default HomePage;

