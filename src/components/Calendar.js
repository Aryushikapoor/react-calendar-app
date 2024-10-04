import React, { useState, useEffect } from 'react';
import { useEventContext } from '../context/EventContext';

const Calendar = () => {
  const { events, fetchEvents } = useEventContext();
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    fetchEvents(); // Fetch events on mount
  }, [fetchEvents]);

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  return (
    <div className="calendar">
      <h2>{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</h2>
      <div className="calendar-grid">
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={i} className="day"></div>
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const eventForDay = events.find(event => new Date(event.date).getDate() === day);

          return (
            <div key={day} className="day">
              {day}
              {eventForDay && <div className="event">{eventForDay.title}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
