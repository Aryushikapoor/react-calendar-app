import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Calendar App</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/add">Add Event</Link>
            </nav>
        </header>
    );
};

export default Header;
