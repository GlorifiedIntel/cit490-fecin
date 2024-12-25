import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";  
import Footer from "../components/Footer";  
import "../styles/home.css";

const Home = () => {
  const events = [
    { id: 1, title: "Prayer Meeting", date: "2024-12-28", description: "Join us for a special prayer session." },
    { id: 2, title: "Translation Workshop", date: "2025-05-15", description: "A gathering of faith and fellowship." },
  ];

  return (
    <div className="home">
      {/* Include the Header at the top of the page */}
      <Header />

      <header className="hero">
        <h1>
          Bringing God's Word <span className="text-green">to Every Language, Every Heart</span>
        </h1>
        <p>Empowering Communities Through the Translation of the Holy Bible.</p>
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

      {/* Include the Footer at the bottom of the page */}
      <Footer />
    </div>
  );
};

export default Home;
