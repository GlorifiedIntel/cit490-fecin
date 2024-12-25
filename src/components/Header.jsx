import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">FECIN</Link>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/leadership">Leadership</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/login" className="button-secondary">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
