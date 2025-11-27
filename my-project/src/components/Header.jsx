import React, { useState, } from "react";
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
      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
      </div>

      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>

        <Link to="/Vision" className="nav-link" onClick={() => setMenuOpen(false)}>
          VISION
        </Link>

        <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
          ABOUT US
        </Link>

        <Link to="/activity" onClick={() => setMenuOpen(false)}>
          OUR ACTIVITIES
        </Link>

        <Link to="/gallery" onClick={() => setMenuOpen(false)}>
          GALLERY
        </Link>

        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          CONTACT US
        </Link>

        <Link to="/membership" className="highlight" onClick={() => setMenuOpen(false)}>
          MemberShip 👑
        </Link>
      </nav>

    </header>
  );
};

export default Header;
