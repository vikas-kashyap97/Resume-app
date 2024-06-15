import React, { useState, useRef } from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Education from './components/Education';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Links from './components/Links';
import Declaration from './components/Declaration';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [contact, setContact] = useState({
    phone: '',
    email: '',
    location: ''
  });
  const [summary, setSummary] = useState('');
  const [education, setEducation] = useState([
    { degree: '', institution: '', year: '', cgpa: '' },
  ]);
  const [experience, setExperience] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [projects, setProjects] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [skills, setSkills] = useState({
    ProgrammingLanguages: [''],
    webTechnologies: [''],
    databaseManagement: [''],
    operatingSystems: [''],
    miscellaneous: ['']
  });
  const [links, setLinks] = useState({
    Github: '',
    Linkedin: '',
    X: '',
    Whatsapp: '',
    Instagram: ''
  });
  const [declaration, setDeclaration] = useState('');
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const [showAchievements, setShowAchievements] = useState(true);

  const contentRef = useRef(null);

  const handleContactChange = (field, value) => {
    setContact({
      ...contact,
      [field]: value
    });
  };

  const handleEducationChange = (index, field, value) => {
    const newEducation = [...education];
    newEducation[index][field] = value;
    setEducation(newEducation);
  };

  const handleExperienceChange = (index, field, value) => {
    const newExperience = [...experience];
    newExperience[index][field] = value;
    setExperience(newExperience);
  };

  const addExperience = () => {
    setExperience([...experience, { position: '', company: '', start: '', end: '', description: '' }]);
  };

  const removeExperience = (index) => {
    const newExperience = [...experience];
    newExperience.splice(index, 1);
    setExperience(newExperience);
  };

  const handleCertificateChange = (index, field, value) => {
    const newCertificates = [...certificates];
    newCertificates[index][field] = value;
    setCertificates(newCertificates);
  };

  const addCertificate = () => {
    setCertificates([...certificates, { name: '', date: '', organization: '' }]);
  };

  const removeCertificate = (index) => {
    const newCertificates = [...certificates];
    newCertificates.splice(index, 1);
    setCertificates(newCertificates);
  };

  const handleProjectChange = (index, field, value) => {
    const newProjects = [...projects];
    newProjects[index][field] = value;
    setProjects(newProjects);
  };

  const addProject = () => {
    setProjects([...projects, { title: '', date: '', site: '', summary: '' }]);
  };

  const removeProject = (index) => {
    const newProjects = [...projects];
    newProjects.splice(index, 1);
    setProjects(newProjects);
  };

  const handleAchievementChange = (index, field, value) => {
    const newAchievements = [...achievements];
    newAchievements[index][field] = value;
    setAchievements(newAchievements);
  };

  const addAchievement = () => {
    setAchievements([...achievements, { title: '', description: '' }]);
  };

  const removeAchievement = (index) => {
    const newAchievements = [...achievements];
    newAchievements.splice(index, 1);
    setAchievements(newAchievements);
  };

  const handleSkillChange = (category, languageIndex, value) => {
    const newSkills = { ...skills };
    newSkills[category][languageIndex] = value;
    setSkills(newSkills);
  };

  const handleLinkChange = (field, value) => {
    setLinks({
      ...links,
      [field]: value
    });
  };

  const handleDeclarationChange = (value) => {
    setDeclaration(value);
  };

  const handlePreview = () => {
    setIsPreviewMode(true);
  };

  const handleDeleteAchievementsSection = () => {
    setShowAchievements(false);
  };

  return (
    <div className="container" ref={contentRef}>
      <Header
        name={name}
        position={position}
        contact={contact}
        onContactChange={handleContactChange}
      />
      <hr />
      <Summary summary={summary} onSummaryChange={setSummary} />
      <hr />
      <Education education={education} onEducationChange={handleEducationChange} />
      <hr />
      <Experience
        experience={experience}
        onExperienceChange={handleExperienceChange}
        addExperience={!isPreviewMode && !isPrinting ? addExperience : null}
        removeExperience={!isPreviewMode && !isPrinting ? removeExperience : null}
      />
      <hr />
      <Certificates
        certificates={certificates}
        onCertificateChange={handleCertificateChange}
        addCertificate={!isPreviewMode && !isPrinting ? addCertificate : null}
        removeCertificate={!isPreviewMode && !isPrinting ? removeCertificate : null}
      />
      <hr />
      <Projects
        projects={projects}
        onProjectChange={handleProjectChange}
        addProject={!isPreviewMode && !isPrinting ? addProject : null}
        removeProject={!isPreviewMode && !isPrinting ? removeProject : null}
      />
      <hr />
      {showAchievements && (
        <>
          <Achievements
            achievements={achievements}
            onAchievementChange={handleAchievementChange}
            addAchievement={!isPreviewMode && !isPrinting ? addAchievement : null}
            removeAchievement={!isPreviewMode && !isPrinting ? removeAchievement : null}
          />
          {!isPreviewMode && !isPrinting && (
            <button onClick={handleDeleteAchievementsSection}>Delete Achievements Section</button>
          )}
          <hr />
        </>
      )}
      <Skills skills={skills} onSkillChange={handleSkillChange} />
      <hr />
      <Links links={links} onLinkChange={handleLinkChange} />
      <hr />
      <Declaration declaration={declaration} onDeclarationChange={handleDeclarationChange} />
      {!isPreviewMode && !isPrinting && (
        <div className="actions">
          <button onClick={handlePreview}>Preview</button>
        </div>
      )}
    </div>
  );
};

export default App;
