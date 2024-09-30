import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <nav className='nav'>
                <Link to="/" className='navItem'>Home</Link>
                <Link to="/about" className='navItem'>About</Link>
                <Link to="/menu" className='navItem'>Menu</Link>
                <Link to="/order" className='navItem'>Order</Link>
            </nav>
        </header>
    );
};

export default Header;
