// src/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // State to control the Annual Report dropdown visibility
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    // Also close dropdown when main menu closes
    setDropdownOpen(false);
  };

  // Function to handle PDF download/opening in new tab
  const handlePDFOpen = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
    setDropdownOpen(false); // Close dropdown after clicking
    setIsOpen(false); // Close mobile menu if open
  };

  // Function to handle AY 23-24 placeholder (to be implemented later)
  const handleAY2324 = () => {
    // TODO: Add AY 23-24 functionality here
    // This will be implemented when the AY 23-24 report is ready
    console.log('AY 23-24 functionality will be added later');
    setDropdownOpen(false); // Close dropdown after clicking
    setIsOpen(false); // Close mobile menu if open
  };

  // Function to toggle dropdown on mobile (click instead of hover)
  const handleDropdownToggle = (e) => {
    // Prevent the link from navigating
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

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

        {/* ======================================================= */}
        {/* ============ UPDATED NAVIGATION LINKS ============ */}
        {/* ======================================================= */}
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><a href="/#about" onClick={closeMenu}>About</a></li>
          
          {/* Annual Report dropdown menu item */}
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
            {/* Dropdown menu that appears on hover (desktop) or click (mobile) */}
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
        
        {/* The "Join Us" button is now a "Contact Us" link */}
        <a 
          href="/#contact"
          onClick={closeMenu}
          className="nav-button"
        >
          Contact Us
        </a>
        {/* ======================================================= */}
      </div>
    </nav>
  );
};

export default Navbar;