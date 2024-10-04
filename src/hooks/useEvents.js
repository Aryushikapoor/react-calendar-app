// src/hooks/useEvents.js
import { useContext, useEffect } from 'react';
import { EventContext } from '../context/EventContext';
import { fetchEvents } from '../api/events';

const useEvents = () => {
    const { events, setEvents } = useContext(EventContext);

    useEffect(() => {
        const getEvents = async () => {
            try {
                const fetchedEvents = await fetchEvents();
                setEvents(fetchedEvents);
            } catch (error) {
                console.error(error);
            }
        };
        getEvents();
    }, [setEvents]);

    return events;
};

export default useEvents;
