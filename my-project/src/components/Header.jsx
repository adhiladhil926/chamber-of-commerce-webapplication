import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/Header.css";
import logo from "../assets/CCIMSME-logo.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); 
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-container">
          <img src={logo} alt="Chamber Logo" className="logo" />
          <h3 className="logo-tagline">
            New Impetus for Industrial Growth in Kerala
          </h3>
        </div>
      </div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
      </div>

      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <Link to="/">HOME</Link>

       

        <Link to="/Vision" className="nav-link">VISION</Link>
        <Link to="/about" className="nav-link">ABOUT US</Link>
        <Link to="/activity">OUR ACTIVITIES</Link>
        <Link to="/gallery">GALLERY</Link>
        <Link to="/contact">CONTACT US</Link>
        <Link to="/membership" className="highlight">MemberShip 👑</Link>
      </nav>
    </header>
  );
};

export default Header;
