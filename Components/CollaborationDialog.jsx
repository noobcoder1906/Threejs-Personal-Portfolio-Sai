import React from 'react';
import { Link } from 'react-router-dom';

const CollaborationDialog = () => {
  // Inline CSS for the component
  const dialogStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '2rem',
    maxWidth: '400px',
    margin: 'auto',
    position: 'relative',
    textAlign: 'center',
    width: '90%', // Ensure it is responsive
    boxSizing: 'border-box'
  };

  const headingStyle = {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '1rem',
    fontWeight: '600'
  };

  const paragraphStyle = {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '1.5rem'
  };

  const linkStyle = {
    display: 'inline-block',
    fontSize: '1rem',
    fontWeight: '500',
    color: '#1d4ed8',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    backgroundColor: '#f3f4f6',
    transition: 'background-color 0.3s, color 0.3s'
  };

  const linkHoverStyle = {
    backgroundColor: '#1d4ed8',
    color: '#ffffff'
  };

  // Hover effect using JavaScript (inline CSS does not support pseudo-classes)
  const handleMouseOver = (event) => {
    Object.assign(event.target.style, linkHoverStyle);
  };

  const handleMouseOut = (event) => {
    Object.assign(event.target.style, linkStyle);
  };

  return (
    <div style={dialogStyle}>
      <h2 style={headingStyle}>Interested in collaborating?</h2>
      <p style={paragraphStyle}>Let's build projects together!</p>
      <Link
        to="/Contact"
        style={linkStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Click here
      </Link>
    </div>
  );
};

export default CollaborationDialog;
