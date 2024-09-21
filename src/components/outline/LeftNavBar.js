import React from 'react';
import { Link } from 'react-router-dom';

function LeftNavBar() {
  return (
    <nav className="bg-light p-3 h-100 overflow-auto">
      <h3>Left Navigation</h3>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/static/welcome" className="nav-link">Java - Welcome</Link>
        </li>
        <li className="nav-item">
          <Link to="/static/welcome" className="nav-link">Java - Introduction</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
}

export default LeftNavBar;
