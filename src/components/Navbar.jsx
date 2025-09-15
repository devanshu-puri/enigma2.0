// src/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // NEW: This line dynamically chooses the correct logo path based on the scroll state
  // const logoSrc = isScrolled ? '/assets/enigma_top.png': '/assets/enigma_bottom.png';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  const handlePDFOpen = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
    setDropdownOpen(false);
    setIsOpen(false);
  };

  const handleAY2324 = () => {
    console.log('AY 23-24 functionality will be added later');
    setDropdownOpen(false);
    setIsOpen(false);
  };

  const handleDropdownToggle = (e) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  return (
    // The 'navbar-scrolled' class is already correctly applied from your code
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" onClick={closeMenu}>
          {/* The image src now uses our dynamic logoSrc variable */}
          <img src={'./assets/enigma_top.png'} alt="Enigma Logo" className="nav-logo" />
        </Link>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Your navigation links and dropdown logic remain unchanged */}
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><a href="/#about" onClick={closeMenu}>About</a></li>
          
          <li 
            className="dropdown-container"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link 
              to="/annual-report" 
              className="dropdown-trigger"
              onClick={handleDropdownToggle}
            >
              Annual Report
            </Link>
            <ul className={`dropdown-menu ${dropdownOpen ? 'dropdown-open' : ''}`}>
              <li>
                <button 
                  className="dropdown-item"
                  onClick={handleAY2324}
                >
                  AY 23-24
                </button>
              </li>
              <li>
                <button 
                  className="dropdown-item"
                  onClick={() => handlePDFOpen('https://www.ecellnmit.in/assets/Annual%20Report2023%20Final%20Draft%20(2).pdf')}
                >
                  AY 22-23
                </button>
              </li>
              <li>
                <button 
                  className="dropdown-item"
                  onClick={() => handlePDFOpen('https://www.ecellnmit.in/assets/EcellReport21.pdf')}
                >
                  AY 21-22
                </button>
              </li>
            </ul>
          </li>
          
          <li><Link to="/blog" onClick={closeMenu}>Blogs</Link></li>
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
          <li><Link to="/team" onClick={closeMenu}>Team</Link></li>
        </ul>
        
        <a 
          href="/#contact"
          onClick={closeMenu}
          className="nav-button"
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;