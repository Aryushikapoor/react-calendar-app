import React from 'react';
import Calendar from '../components/Calendar'; // Ensure this path is correct

import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>My Calendar App</h1>
            <Link to="/add-event">Add Event</Link>
            <Calendar />
        </div>
    );
};

export default Home;
