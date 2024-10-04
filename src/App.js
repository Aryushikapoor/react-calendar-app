import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calendar from './components/Calendar';
import EventDetails from './components/EventDetails';
import EventForm from './components/EventForm';
import { EventProvider } from './context/EventContext';

const App = () => {
  return (
    <EventProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Calendar />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/add-event" element={<EventForm />} />
        </Routes>
      </Router>
    </EventProvider>
  );
};

export default App;
