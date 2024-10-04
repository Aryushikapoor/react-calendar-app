// src/api/events.js
const API_URL = 'https://react-calendar-api.beeceptor.com';

export const fetchEvents = async () => {
    const response = await fetch(`${API_URL}/events`);
    if (!response.ok) {
        throw new Error('Failed to fetch events');
    }
    return response.json();
};

export const addEvent = async (event) => {
    const response = await fetch(`${API_URL}/events`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
    });
    if (!response.ok) {
        throw new Error('Failed to add event');
    }
    return response.json();
};

export const editEvent = async (id, updatedEvent) => {
    const response = await fetch(`${API_URL}/events/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedEvent),
    });
    if (!response.ok) {
        throw new Error('Failed to edit event');
    }
    return response.json();
};

export const deleteEvent = async (id) => {
    const response = await fetch(`${API_URL}/events/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete event');
    }
    return response.json();
};
