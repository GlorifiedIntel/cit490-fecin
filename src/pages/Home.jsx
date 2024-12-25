import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const events = [
    { id: 1, title: "Prayer Meeting", date: "2024-12-28", description: "Join us for a special prayer session." },
    { id: 2, title: "Youth Conference", date: "2025-01-15", description: "A gathering of faith and fellowship." },
  ];

  return (
    <div className="home">
      <header className="hero">
        <h1>Welcome to FECIN</h1>
        <p>Empowering faith, fostering community, and making a difference.</p>
        <Link to="/about-us" className="button-primary">Learn More</Link>
      </header>

      <section className="events-preview">
        <h2>Upcoming Events</h2>
        <div className="event-cards">
          {events.map(event => (
            <div className="event-card" key={event.id}>
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.description}</p>
              <Link to="/events" className="button-secondary">View All Events</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>Get Involved</h2>
        <div className="cta-buttons">
          <Link to="/prayer-request" className="button-primary">Submit Prayer Request</Link>
          <Link to="/donate" className="button-secondary">Make a Donation</Link>
        </div>
      </section>

      <footer className="contact-info">
        <h2>Contact Us</h2>
        <p>Email: contact@fecin.org</p>
        <p>Phone: +123 456 7890</p>
        <Link to="/contact-us" className="button-primary">Get in Touch</Link>
      </footer>
    </div>
  );
};

export default Home;
