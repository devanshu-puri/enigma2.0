import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import Events from './components/Events'; // Import the new component


function App() {
  return (
    <div className="app-container">
      <Navbar />

      {/* Hero Section */}
      <header id="home" className="hero-section">
        <div className="hero-content">
          <h1>ENIGMA</h1>
          <p className="hero-subtitle">WHERE IDEAS IGNITE AND INNOVATION TAKES FLIGHT</p>
          <p className="hero-description">
            We are a community of innovators, dreamers, and builders. 
            Join us to bring your entrepreneurial visions to life.
          </p>
          
        </div>
        <div className="hero-image-container">
          <img src="/assets/hero.png" alt="Hero Illustration" className="hero-image" />
        </div>
      </header>

      <main>
        {/* Domains Section */}
        <section className="domains-section">
            <h2>Domains</h2>
            <p>We work across various domains to foster a culture of innovation and hands-on learning.</p>
            <div className="domains-grid">
                <img src="/assets/card1.png" alt="Domain Card 1" className="domain-card" />
                <img src="/assets/card2.png" alt="Domain Card 2" className="domain-card" />
                <img src="/assets/card3.png" alt="Domain Card 3" className="domain-card" />
                <img src="/assets/card4.png" alt="Domain Card 4" className="domain-card" />
                <img src="/assets/card5.png" alt="Domain Card 5" className="domain-card" />
                <img src="/assets/card6.png" alt="Domain Card 6" className="domain-card" />
            </div>
        </section>

        {/* Recruitment Section */}
        <section className="recruitment-section">
            <div className="recruitment-content">
                <h3>Let's make things happen</h3>
                <h2>Join our recruitment for 2024!</h2>
                <p>Become a part of our family, express your entrepreneurship, take it to the next level and build something that solves people’s problems.</p>
                <button className="cta-button">Apply Now</button>
            </div>
            <div className="recruitment-image-container">
                <img src="/assets/xyz.png" alt="Recruitment" className="recruitment-image" />
            </div>
        </section>

        {/* IMPROVISED ABOUT SECTION */}
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
                    <p>Enigma E-Cell aims to transform itself into a platform to launch the leaders of tomorrow towards the path of success. We plan to widen our scope of impact by allowing not only students but also working professionals, retired personnel, etc. to have an opportunity to fabricate their vision into reality.</p>
                </div>
                <div className="about-column">
                    <p>Opportunities and networks are the two defining factors in the realm of entrepreneurship that makes all the difference. We want to make sure that there's no dearth of either. Our team is a small group of hard-working individuals who work day in, day out to bring us closer to our vision, one step at a time.</p>
                </div>
            </div>
        </section>

        {/* NEW EVENTS COMPONENT */}
        <Events />

        {/* Testimonials Section */}
        <section className="testimonials-section">
            <h2>What people say about us</h2>
            <p>Our community's feedback is our greatest asset.</p>
            <div className="gallery">
                <img src="/assets/img1.png" alt="Testimonial 1" />
                <img src="/assets/img2.png" alt="Testimonial 2" />
                <img src="/assets/img3.png" alt="Testimonial 3" />
                <img src="/assets/img4.png" alt="Testimonial 4" />
                <img src="/assets/img5.jpeg" alt="Testimonial 5" />
                <img src="/assets/img6.png" alt="Testimonial 6" />
                <img src="/assets/img7.jpg" alt="Testimonial 7" />
                <img src="/assets/img8.png" alt="Testimonial 8" />
                <img src="/assets/img9.jpg" alt="Testimonial 9" />
            </div>
        </section>
        
        <ContactForm />
      </main>

      {/* Footer Section */}
      <footer className="footer-section">
        <img src="/assets/enigma_bottom.png" alt="Enigma Footer Logo" className="footer-logo-image"/>
        <p>© 2024 Enigma E-Cell. All Rights Reserved.</p>
        <div className="footer-socials">
          <p>Made by devanshu</p>
          <p>github:- CodeKenshinDev</p>
        </div>
      </footer>
    </div>
  );
}

export default App;