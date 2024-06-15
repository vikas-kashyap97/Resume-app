// src/components/Declaration.js
import React, { useEffect, useRef } from 'react';
import './Declaration.css'; // Import the CSS file for styling

const Declaration = ({ declaration, onDeclarationChange }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [declaration]);

  return (
    <div className="declaration">
      <textarea
        ref={textareaRef}
        value={declaration}
        onChange={(e) => onDeclarationChange(e.target.value)}
        placeholder="Declaration"
      />
    </div>
  );
};

export default Declaration;
