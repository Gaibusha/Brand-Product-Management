import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faBox,
  faTags,
  faThList,
  faShoppingCart,
  faClipboardList,
  faSignOutAlt,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';  // Import the CSS file

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <nav>
        <Link to="/" className="sidebar-link">
          <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" /> Dashboard
        </Link>
        <Link to="/products" className="sidebar-link">
          <FontAwesomeIcon icon={faBox} className="mr-2" /> Products
        </Link>
        <Link to="/brands" className="sidebar-link">
          <FontAwesomeIcon icon={faTags} className="mr-2" /> Brands
        </Link>
        <Link to="/categories" className="sidebar-link">
          <FontAwesomeIcon icon={faThList} className="mr-2" /> Categories
        </Link>
        <Link to="/orders" className="sidebar-link">
          <FontAwesomeIcon icon={faClipboardList} className="mr-2" /> Orders
        </Link>
        <Link to="/cart" className="sidebar-link">
          <FontAwesomeIcon icon={faShoppingCart} className="mr-2" /> Cart
        </Link>
        <Link to="/signup" className="sidebar-link">
          <FontAwesomeIcon icon={faUserPlus} className="mr-2" /> Sign Up
        </Link>
      </nav>
      <div className="sidebar-footer">
        <Link to="/logout" className="sidebar-link logout-link">
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
