// src/components/Education.js
import React from 'react';
import './Education.css'; // Import the CSS file for styling

const Education = ({ education, onEducationChange }) => {
  return (
    <div className="education">
      <h2>Education</h2>
      <table className="education-table">
        <thead>
          <tr>
            <th>Degree</th>
            <th id='Insti'>Institution</th>
            <th id='year'>Year</th>
            <th id='cgpa'>CGPA/Percentage</th>
          </tr>
        </thead>
        <tbody>
          {education.map((edu, eduIndex) => (
            <React.Fragment key={eduIndex}>
              {[0, 1, 2].map((rowIndex) => (
                <tr key={`${eduIndex}-${rowIndex}`}>
                  <td>
                    <input
                      type="text"
                      className="degree-input"
                      placeholder="Degree"
                      value={edu.d}
                      onChange={(e) => onEducationChange(eduIndex, 'degree', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                    
                      type="text"
                      className="institution-input"
                      placeholder="Institution"
                      value={edu.i}
                      onChange={(e) => onEducationChange(eduIndex, 'institution', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="year-input"
                      placeholder="Year"
                      value={edu.y}
                      onChange={(e) => onEducationChange(eduIndex, 'year', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="cgpa-input"
                      placeholder="CGPA/Percentage"
                      value={edu.c}
                      onChange={(e) => onEducationChange(eduIndex, 'cgpa', e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Education;

