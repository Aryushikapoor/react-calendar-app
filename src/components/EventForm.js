import React, { useState } from 'react';
import { useEventContext } from '../context/EventContext';

const EventForm = ({ event }) => {
    const { addEvent, editEvent } = useEventContext();
    const [title, setTitle] = useState(event ? event.title : '');
    const [date, setDate] = useState(event ? event.date : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEvent = { title, date };
        if (event) {
            editEvent(event.id, newEvent);
        } else {
            addEvent(newEvent);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Event Title" required />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <button type="submit">{event ? 'Edit Event' : 'Add Event'}</button>
        </form>
    );
};

export default EventForm;
