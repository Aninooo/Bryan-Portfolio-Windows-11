import React from 'react';
import './ChromePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const ChromePage = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="chrome-page">
      <header className="chrome-header">
        <div className="chrome-tabs">
          <span>New Tab</span>
        </div>
        <div className="chrome-controls">
          <FontAwesomeIcon icon={faMinus} className="control-icon minimize" title="Minimize" />
          <FontAwesomeIcon icon={faWindowClose} className="control-icon close" title="Close" onClick={handleClose} />
        </div>
      </header>
      <main className="chrome-content">
        <h1>resume here</h1>
      </main>
    </div>
  );
}

export default ChromePage;
