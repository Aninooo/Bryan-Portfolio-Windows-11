import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Footer.css'; 
import Windows11 from '../assets/windows11.png'; 
import Chrome from '../assets/chrome.png';
import FileExplorer from '../assets/file-explorer.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faVolumeUp, faBell } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const navigate = useNavigate(); 
  const [time, setTime] = useState(new Date());

  const openChromePage = () => {
    navigate('/chrome'); 
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="footer">
      <div className="taskbar">
        <img src={Windows11} alt="Windows 11" className="windows-icon" />
        <img
          src={Chrome}
          alt="Chrome"
          className='chrome-icon'
          onClick={openChromePage} 
          style={{ cursor: 'pointer' }}
        />
        <img src={FileExplorer} alt="File Explorer" className='fileExplorer-icon' />
      </div>
      <div className="system-icons">
        <FontAwesomeIcon icon={faWifi} className="system-icon" />
        <FontAwesomeIcon icon={faVolumeUp} className="system-icon" />
        <div className="time-date">
          <div>{time.toLocaleTimeString()}</div>
          <div>{time.toLocaleDateString()}</div>
        </div>
        <FontAwesomeIcon icon={faBell} className="system-icon" />
      </div>
    </div>
  );
}

export default Footer;
