// src/components/Summary.js
import React, { useEffect, useRef } from 'react';
import './Summary.css'; // Import the CSS file for styling

const Summary = ({ summary, onSummaryChange }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [summary]);

  return (
    <div className="summary">
      <textarea
        ref={textareaRef}
        placeholder="Summary"
        value={summary}
        onChange={(e) => onSummaryChange(e.target.value)}
      ></textarea>
    </div>
  );
};

export default Summary;
