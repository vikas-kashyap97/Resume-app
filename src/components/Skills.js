// src/components/Skills.js
import React from 'react';
import './Skills.css';

const Skills = ({ skills, onSkillChange }) => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skill-list">
        {/* Programming Languages */}
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <ul>
            {skills.ProgrammingLanguages.map((language, index) => (
              <li key={index}>
                <input
                  type="text"
                  value={language}
                  onChange={(e) => onSkillChange('ProgrammingLanguages', index, e.target.value)}
                  placeholder="Enter language"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Web Technologies */}
        <div className="skill-category">
          <h3>Web Technologies</h3>
          <ul>
            {skills.webTechnologies.map((technology, index) => (
              <li key={index}>
                <input
                  type="text"
                  value={technology}
                  onChange={(e) => onSkillChange('webTechnologies', index, e.target.value)}
                  placeholder="Enter technology"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Database Management */}
        <div className="skill-category">
          <h3>Database Management</h3>
          <ul>
            {skills.databaseManagement.map((database, index) => (
              <li key={index}>
                <input
                  type="text"
                  value={database}
                  onChange={(e) => onSkillChange('databaseManagement', index, e.target.value)}
                  placeholder="Enter database"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Operating Systems */}
        <div className="skill-category">
          <h3>Operating Systems</h3>
          <ul>
            {skills.operatingSystems.map((os, index) => (
              <li key={index}>
                <input
                  type="text"
                  value={os}
                  onChange={(e) => onSkillChange('operatingSystems', index, e.target.value)}
                  placeholder="Enter OS"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Miscellaneous */}
        <div className="skill-category">
          <h3>Miscellaneous</h3>
          <ul>
            {skills.miscellaneous.map((item, index) => (
              <li key={index}>
                <input
                  type="text"
                  value={item}
                  onChange={(e) => onSkillChange('miscellaneous', index, e.target.value)}
                  placeholder="Enter item"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
