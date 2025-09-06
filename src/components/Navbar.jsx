// src/components/Navbar.jsx

import React, { useState } from 'react';

// NO MORE 'import enigmaLogo from ...' LINE

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Use the simple string path */}
        <img src="/assets/enigma_h.png" alt="Enigma Logo" className="nav-logo" />
        
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
           <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
           <li><a href="#annualreport" onClick={() => setMenuOpen(false)}>Annual Report</a></li>
           <li><a href="#blog" onClick={() => setMenuOpen(false)}>Blog</a></li>
           <li><a href="#ideathon" onClick={() => setMenuOpen(false)}>Ideathon 6.0</a></li>
           <li><a href="#team" onClick={() => setMenuOpen(false)}>Team </a></li>
        </ul>
        <button className="nav-button">Contact Us</button>
      </div>
    </nav>
  );
}

export default Navbar;