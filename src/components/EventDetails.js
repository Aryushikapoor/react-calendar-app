import React from 'react';
import { useParams } from 'react-router-dom';
import { useEventContext } from '../context/EventContext';

const EventDetails = () => {
  const { id } = useParams(); // Get the event ID from the URL
  const { events } = useEventContext(); // Access events from the context

  const event = events.find(event => event.id === id); // Find the event by ID

  if (!event) return <div>Event not found</div>; // Handle case if event does not exist

  return (
    <div>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      {/* Other event details */}
    </div>
  );
};

export default EventDetails;
