import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-dark text-white p-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <h1 className="mb-0">Your Application Name</h1>
          </div>
          <div className="col-md-8">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/" exact>Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/java">Java</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/python">Python</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/javascript">JavaScript</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/converters">Converters</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About Us</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
