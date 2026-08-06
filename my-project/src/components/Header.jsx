import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../components/Header.css";
import logo from "../assets/CCIMSME-logo.jpg";

const navItems = [
  { to: "/", label: "HOME", end: true },
  { to: "/vision", label: "VISION" },
  { to: "/about", label: "ABOUT US" },
  { to: "/activity", label: "OUR ACTIVITIES" },
  { to: "/gallery", label: "GALLERY" },
  { to: "/cmsi", label: "INDUSTRY SUPPORT" },
  { to: "/contact", label: "CONTACT US" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-container">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Chamber Logo" className="logo" />
          </Link>
          <h3 className="logo-tagline">New Impetus for Industrial Growth in Kerala</h3>
        </div>
      </div>

      <button
        type="button"
        className="hamburger"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
      >
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
      </button>

      <nav className={`navbar ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
        {navItems.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            onClick={closeMenu}
          >
            {label}
          </NavLink>
        ))}

        <NavLink
          to="/membership"
          className={({ isActive }) => `highlight${isActive ? " active" : ""}`}
          onClick={closeMenu}
        >
          MEMBERSHIP
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
