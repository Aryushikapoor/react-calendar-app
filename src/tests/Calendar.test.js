import React from 'react';
import { render, screen } from '@testing-library/react';
import Calendar from '../components/Calendar';
import { EventProvider } from '../context/EventContext';

test('renders calendar component', () => {
    render(
        <EventProvider>
            <Calendar />
        </EventProvider>
    );
    const headingElement = screen.getByText(/Calendar View/i);
    expect(headingElement).toBeInTheDocument();
});
