// src/components/Links.js
import React from 'react';
import './Links.css';
const Links = ({ links, onLinkChange }) => {
  return (
    <div className="links">
      <h2>Links</h2>
      <div className="link-list">
        {Object.keys(links).map((category) => (
          <div key={category} className="link-item">
            <label>{category}</label>
            <input
              type="text"
              value={links[category]}
              onChange={(e) => onLinkChange(category, e.target.value)}
              placeholder={`Enter ${category} link`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Links;
