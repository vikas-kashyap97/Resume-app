import React from 'react';
import './Projects.css';

const Projects = ({ projects, onProjectChange, addProject, removeProject }) => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      {projects.map((proj, index) => (
        <div key={index} className="project-item">
          <input
            className="project-title-input"
            type="text"
            value={proj.title}
            onChange={(e) => onProjectChange(index, 'title', e.target.value)}
            placeholder="Project Title"
          />
          <input
            type="text"
            className="project-title-input"
            value={proj.site}
            onChange={(e) => onProjectChange(index, 'site', e.target.value)}
            placeholder="Website"
          />
          <textarea
            value={proj.summary}
            className="project-summary-input"
            onChange={(e) => onProjectChange(index, 'summary', e.target.value)}
            placeholder="Project Summary"
          />
          {!addProject ? null : <button onClick={() => removeProject(index)}>Delete</button>}
        </div>
      ))}
      {!addProject ? null : <button onClick={addProject}>Add Project</button>}
    </div>
  );
};

export default Projects;
