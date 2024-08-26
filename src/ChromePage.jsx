import React from 'react';
import './ChromePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Google from './assets/google.png';
import Github from './assets/socials/github-icon.png';
import Portfolio from './assets/socials/portfolio.png';
import LinkedIn from './assets/socials/linkedin-icon.png';
import Fb from './assets/socials/fb-icon.png';

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
        <div className="search-bar">
          <img className="google-logo" src={Google} alt="Google" />
          <input className='google-input' type="text" placeholder="Search Google or type a URL" />
        </div>

        <div className='socials'>
          <a href="https://github.com/Aninooo" target="_blank" rel="noopener noreferrer" className='social-item'>
            <img src={Github} alt="GitHub" />
            <span className='social-label'>GitHub</span>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100093050435995" target="_blank" rel="noopener noreferrer" className='social-item'>
            <img src={Fb} alt="Facebook" />
            <span className='social-label'>Facebook</span>
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className='social-item'>
            <img src={LinkedIn} alt="LinkedIn" />
            <span className='social-label'>LinkedIn</span>
          </a>
          <a href="https://lomerio.cloud" target="_blank" rel="noopener noreferrer" className='social-item'>
            <img src={Portfolio} alt="Resume" />
            <span className='social-label'>Portfolio</span>
          </a>
        </div>
      </main>
    </div>
  );
}

export default ChromePage;
