import React from "react";
import "../styles/events.css";

const EventCard = ({ title, date, description, onViewDetails }) => {
  return (
    <div className="event-card">
      <h3 className="event-title">{title}</h3>
      <p className="event-date">{date}</p>
      <p className="event-description">{description}</p>
      <button className="button-primary" onClick={onViewDetails}>
        View Details
      </button>
    </div>
  );
};

export default EventCard;
