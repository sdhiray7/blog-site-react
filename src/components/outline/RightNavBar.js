import React from 'react';

function RightNavBar() {
  return (
    <nav className="bg-light p-3 h-100 overflow-auto">
      <h3>Right Navigation</h3>
      <ul className="nav flex-column">
        <li className="nav-item"><a href="#" className="nav-link">Link A</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Link B</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Link C</a></li>
      </ul>
    </nav>
  );
}

export default RightNavBar;
