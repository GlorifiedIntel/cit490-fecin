import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About FECIN</h3>
          <p>FECIN is committed to fostering faith, empowering communities, and supporting individuals through spiritual growth and service.</p>
          <Link to="/about-us" className="footer-link">Learn More</Link>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/leadership">Leadership</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>Email: contact@fecin.org</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Faith Avenue, Nigeria</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 FECIN. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
