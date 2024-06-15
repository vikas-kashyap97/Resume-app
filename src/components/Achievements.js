import React from 'react';
import './Achievements.css';

const Achievements = ({ achievements, onAchievementChange, addAchievement, removeAchievement }) => {
  return (
    <div className="achievements">
      <h2>Achievements</h2>
      {achievements.map((ach, index) => (
        <div key={index} className="achievement-item">
          <input
            type="text"
            className="achievement-title-input"
            value={ach.title}
            onChange={(e) => onAchievementChange(index, 'title', e.target.value)}
            placeholder="Achievement Title"
          />
          <textarea
            value={ach.description}
            className="achievement-description-input"
            onChange={(e) => onAchievementChange(index, 'description', e.target.value)}
            placeholder="Achievement Description"
          />
          {!addAchievement ? null : <button onClick={() => removeAchievement(index)}>Delete</button>}
        </div>
      ))}
      {!addAchievement ? null : <button onClick={addAchievement}>Add Achievement</button>}
    </div>
  );
};

export default Achievements;
