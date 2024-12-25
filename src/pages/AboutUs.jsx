import React from "react";
import "../styles/aboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="hero-section">
        <h1>About Us</h1>
        <p>Welcome to the Fellowship of Eggon Christians in Nigeria (FECIN). Our mission is to unite believers and support spiritual growth within our community.</p>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>To foster faith, empower communities, and inspire hope through worship, service, and fellowship.</p>
      </section>

      <section className="vision-section">
        <h2>Our Vision</h2>
        <p>A spiritually enriched community dedicated to glorifying God and serving humanity with love and compassion.</p>
      </section>

      <section className="values-section">
        <h2>Our Core Values</h2>
        <ul>
          <li>Faith</li>
          <li>Integrity</li>
          <li>Service</li>
          <li>Unity</li>
          <li>Compassion</li>
        </ul>
      </section>

      <section className="cta-section">
        <h2>Join Us</h2>
        <p>Become part of our growing family. Together, we can make a difference.</p>
        <button className="button-primary">Get Involved</button>
      </section>
    </div>
  );
};

export default AboutUs;
