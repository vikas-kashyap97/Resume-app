


import React from 'react';
import './Certificates.css';

const Certificates = ({ certificates, onCertificateChange, addCertificate, removeCertificate }) => {
  return (
    <div className="certificates">
      <h2>Certificates</h2>
      {certificates.map((cert, index) => (
        <div key={index} className="certificate-item">
          <input
          id='certiName'
            type="text"
            className="certificate-name-input"
            value={cert.name}
            onChange={(e) => onCertificateChange(index, 'name', e.target.value)}
            placeholder="Certificate Name"
          />
          <input
          id='certiDate'
            type="text"
            className="certificate-name-input"
            value={cert.date}
            onChange={(e) => onCertificateChange(index, 'date', e.target.value)}
            placeholder="Date of Issue"
          />
          <input
            type="text"
            className="certificate-name-input"
            value={cert.organization}
            onChange={(e) => onCertificateChange(index, 'organization', e.target.value)}
            placeholder="Organization"
          />
          {!addCertificate ? null : <button onClick={() => removeCertificate(index)}>Delete</button>}
        </div>
      ))}
      {!addCertificate ? null : <button onClick={addCertificate}>Add Certificate</button>}
    </div>
  );
};

export default Certificates;
