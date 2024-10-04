import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

// Create the context
const EventContext = createContext();

// Provider component
export const EventProvider = ({ children }) => {
    const [events, setEvents] = useState([]);

    const fetchEvents = async () => {
        const response = await axios.get('https://react-calendar-api.beeceptor.com/events');
        setEvents(response.data);
    };

    const addEvent = async (event) => {
        const response = await axios.post('https://react-calendar-api.beeceptor.com/events', event);
        setEvents((prev) => [...prev, response.data]);
    };

    const editEvent = async (id, updatedEvent) => {
        await axios.put(`https://react-calendar-api.beeceptor.com/events/${id}`, updatedEvent);
        fetchEvents(); // Refresh events after edit
    };

    const deleteEvent = async (id) => {
        await axios.delete(`https://react-calendar-api.beeceptor.com/events/${id}`);
        fetchEvents(); // Refresh events after deletion
    };

    return (
        <EventContext.Provider value={{ events, fetchEvents, addEvent, editEvent, deleteEvent }}>
            {children}
        </EventContext.Provider>
    );
};

// Custom hook to use the EventContext
export const useEventContext = () => useContext(EventContext);
