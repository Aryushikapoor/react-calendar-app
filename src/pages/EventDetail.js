import React from 'react';
import EventDetails from '../components/EventDetails';

const EventDetail = ({ event }) => {
    return (
        <div>
            <h2>Event Details</h2>
            <EventDetails event={event} />
        </div>
    );
};

export default EventDetail;
