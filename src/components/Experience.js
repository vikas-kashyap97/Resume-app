import React from 'react';
import './Experience.css';

const Experience = ({ experience, onExperienceChange, addExperience, removeExperience }) => {
  return (
    <div className="experience">
      <h2>Experience</h2>
      {experience.map((exp, index) => (
        <div key={index} className="experience-item">
          <input
            type="text"
            className="company-input"
            value={exp.company}
            onChange={(e) => onExperienceChange(index, 'company', e.target.value)}
            placeholder="Position at Company"
          />
          <div className="dates">
            <input
              type="text"
              className="date-input"
              value={exp.start}
              onChange={(e) => onExperienceChange(index, 'start', e.target.value)}
              placeholder="Start -End Date"
            />
          </div>
          <textarea
            className="description-input"
            value={exp.description}
            onChange={(e) => onExperienceChange(index, 'description', e.target.value)}
            placeholder="About the position"
          />
          {!addExperience ? null : <button onClick={() => removeExperience(index)}>Delete</button>}
        </div>
      ))}
      {!addExperience ? null : <button onClick={addExperience}>Add Experience</button>}
    </div>
  );
};

export default Experience;
