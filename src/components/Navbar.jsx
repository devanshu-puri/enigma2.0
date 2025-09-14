// src/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" onClick={closeMenu}>
          <img src="/assets/enigma_h.png" alt="Enigma Logo" className="nav-logo" />
        </Link>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><a href="/#about" onClick={closeMenu}>About</a></li>
          <li><Link to="/team" onClick={closeMenu}>Our Team</Link></li>
          <li>
            <a 
              href="https://ideathon6-0.ecellnmit.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={closeMenu}
            >
              Ideathon 6.0
            </a>
          </li>
          <li><a href="/#events" onClick={closeMenu}>Events</a></li>
          <li><a href="/#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
        <a 
          href="https://your-application-link.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-button"
        >
          Join Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;