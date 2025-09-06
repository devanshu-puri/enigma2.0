import React, { useState } from 'react';

// Data for the events
const eventsData = [
  {
    title: "IDEATHON",
    content: "Ideathon, a national level business competition organized by E-Cell, is the flagship event for the technofest of NMIT. This is an innovative, intense, and brainstorming event which encourages new and modern ideas to solve real-life issues. It provides a platform to shape the future with true potential and creativity. A few genuine ideas will be given a one-time opportunity to get incubated."
  },
  {
    title: "INCEPTION",
    content: "Each time in Inception ECELL organizes various events which revolve around once personal development of entrepreneurial skills, soft skills and communication. Events full of fun and learning are completely enjoyed by each one of the participants."
  },
  {
    title: "WORKSHOPS",
    content: "By the medium of such events ecell aims to increase the ability and readiness to develop, organize and run a business enterprise, along with any of its uncertainties."
  }
];

function Events() {
  const [openIndex, setOpenIndex] = useState(1); // First item is open by default

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="events" className="events-section">
      <div className="section-header">
        <h2 className="section-title yellow-bg">Our Events</h2>
        <p className="section-subtitle">Step-by-Step Guide to Achieving Your Business Goals</p>
      </div>
      <div className="event-list">
        {eventsData.map((event, index) => (
          <div 
            key={index} 
            className={`event-item ${openIndex === index + 1 ? 'active' : ''}`}
            onClick={() => handleToggle(index + 1)}
          >
            <div className="event-header">
              <span className="event-number">0{index + 1}</span>
              <h3 className="event-title">{event.title}</h3>
              <div className="event-icon">
                <span>{openIndex === index + 1 ? '−' : '+'}</span>
              </div>
            </div>
            {openIndex === index + 1 && (
              <div className="event-content">
                <p>{event.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;