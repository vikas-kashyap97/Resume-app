// src/components/Header.js
import React from 'react';
import './Header.css'; // Import the CSS file for styling

const Header = ({ name, position, contact, onContactChange }) => {
  return (
    <div className="header">
      <div className="header-center">
        <input
          type="text"
          className="name-input"
          placeholder="Name"
          value={name.name}
          onChange={(e) => onContactChange('name', e.target.value)}
        />
        <input
          type="text"
          className="position-input"
          placeholder="Position"
          value={position.position}
          onChange={(e) => onContactChange('position', e.target.value)}
        />
        <div className="contact-info">
          <input id='contact'
            type="text"
            className="contact-input"
            placeholder="Phone"
            value={contact.phone}
            onChange={(e) => onContactChange('phone', e.target.value)}
          />
          <span className="separator">|</span>
          <input
            type="text"
            className="contact-input"
            placeholder="Email"
            value={contact.email}
            onChange={(e) => onContactChange('email', e.target.value)}
          />
          <span className="separator">|</span>
          <input
          id='location'
            type="text"
            className="contact-input"
            placeholder="Location"
            value={contact.location}
            onChange={(e) => onContactChange('location', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
