import React from "react";
import EventCard from "../components/EventCard";

const events = [
  { id: 1, title: "Prayer Meeting", date: "2024-12-28", description: "Join us for a special prayer session." },
  { id: 2, title: "Youth Conference", date: "2025-01-15", description: "A gathering of faith and fellowship." },
];

const Events = () => {
  const handleViewDetails = (id) => {
    alert(`Viewing details for event ID: ${id}`);
    // Implement navigation or modal here
  };

  return (
    <div className="events">
      <h2>Upcoming Events</h2>
      <div className="event-grid">
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            date={event.date}
            description={event.description}
            onViewDetails={() => handleViewDetails(event.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
