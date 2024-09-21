import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AuthorInfo from './AuthorInfo';
import './StaticPageRenderer.css'; // We'll create this CSS file

function StaticPageRenderer() {
  const [content, setContent] = useState('');
  const { pageName } = useParams();

  useEffect(() => {
    fetch(`/static-pages/java/${pageName}.html`)
      .then(response => response.text())
      .then(html => setContent(html))
      .catch(error => console.error('Error loading static page:', error));
  }, [pageName]);

  // Hardcoded author information
  const authorInfo = {
    name: "John Doe",
    photo: process.env.PUBLIC_URL + '/images/logo192.png',
    bio: "John Doe is a software engineer with over 10 years of experience in web development. He specializes in React and Node.js, and is passionate about creating user-friendly applications. In his free time, John enjoys hiking and playing the guitar.",
    linkedin: "https://www.linkedin.com/in/johndoe",
    instagram: "https://www.instagram.com/johndoe",
    twitter: "https://twitter.com/johndoe"
  };

  return (
    <div className="static-page-container">
      <div className="static-page-content" dangerouslySetInnerHTML={{ __html: content }} />
      <AuthorInfo
        name={authorInfo.name}
        photo={authorInfo.photo}
        bio={authorInfo.bio}
        linkedin={authorInfo.linkedin}
        instagram={authorInfo.instagram}
        twitter={authorInfo.twitter}
      />
    </div>
  );
}

export default StaticPageRenderer;
