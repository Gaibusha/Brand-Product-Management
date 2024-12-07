import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="bg-gray-900 p-4 flex items-center justify-center relative">
      <Link to="/" className="absolute left-4">
     
      </Link>
      <h1 className="header-title">ShopSync</h1>
      <nav className="absolute right-4 flex">
        <Link to="/" className="text-white mx-2">Home</Link>
        <Link to="/chat-bot" className="text-white mx-2">Chat Bot</Link>
        <Link to="/contact-us" className="text-white mx-2">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;
