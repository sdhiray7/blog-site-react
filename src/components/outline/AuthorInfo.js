// src/components/outline/AuthorInfo.js
import React from 'react';
import './AuthorInfo.css';

function AuthorInfo({ name, photo, bio, linkedin, instagram, twitter }) {
  return (
    <div className="author-info">
      <div className="author-photo">
        <img src={photo} alt={name} />
      </div>
      <div className="author-details">
        <h3>{name}</h3>
        <div className="social-links">
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          )}
          {instagram && (
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          )}
          {twitter && (
            <a href={twitter} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          )}
        </div>
        <div className="author-bio-container">
          <p className="author-bio">{bio}</p>
        </div>
      </div>
    </div>
  );
}

export default AuthorInfo;
