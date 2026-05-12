import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

/**
 * Navbar Component
 * - Displays navigation links for all pages
 * - Mobile-responsive with hamburger menu
 * - Uses useState hook for mobile menu toggle
 * - Implements React Router Link for navigation
 */
function Navbar() {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu on hamburger click
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo and Brand Name */}
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src="/logo1.png" alt="Bhutan Travel Explorer" className="logo-image" />
          Bhutan Travel Explorer
        </Link>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="hamburger" onClick={toggleMobileMenu}>
          <span className={isMobileMenuOpen ? "bar active" : "bar"}></span>
          <span className={isMobileMenuOpen ? "bar active" : "bar"}></span>
          <span className={isMobileMenuOpen ? "bar active" : "bar"}></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/packages" className="nav-link" onClick={closeMobileMenu}>
              Packages
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin" className="nav-link" onClick={closeMobileMenu}>
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
