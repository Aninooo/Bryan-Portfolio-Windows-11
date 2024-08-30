import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Footer.css'; 
import Windows11 from '../assets/windows11.png'; 
import Chrome from '../assets/chrome.png';
import FileExplorer from '../assets/file-explorer.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faVolumeUp, faBell, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import Recyclebin from '../assets/recycle-bin.png';
import Fileexplorer from '../assets/file-explorer.png';
import Vscode from '../assets/vscode.png';
import ProfilePic from '../assets/login/bryan.webp';

const Footer = () => {
  const navigate = useNavigate(); 
  const [time, setTime] = useState(new Date());
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [showPowerOptions, setShowPowerOptions] = useState(false); 

  const openChromePage = () => {
    navigate('/chrome'); 
  };

  const toggleStartMenu = () => {
    setShowStartMenu(!showStartMenu);
  };

  const togglePowerOptions = () => {
    setShowPowerOptions(!showPowerOptions);
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
        <img 
          src={Windows11} 
          alt="Windows 11" 
          className="windows-icon" 
          onClick={toggleStartMenu}
        />
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
      {showStartMenu && (
        <div className="start-menu">
          <div className="search-container">
            <input type="text" className="search-input" placeholder="Search" />
          </div>
          <div className="pinned-apps">
            <div className="pin-title">Pinned</div>
            <div className="apps-list">
              <div>
                <img src={Chrome} alt="Chrome" className="app-icon-chrome" />
                <span className='chrome-label'>Chrome</span>
              </div>
              <div>
                <img src={Recyclebin} alt="bin" className="app-icon-recyclebin" />
                <span className='recyclebin'>Recyclebin</span>
              </div>
              <div>
                <img src={Fileexplorer} alt="file" className="app-icon-fileexplorer" />
                <span className='fileexplorer'>File Explorer</span>
              </div>
              <div>
                <img src={Vscode} alt="vscode" className="app-icon-vscode" />
                <span className='vscode'>Vs code</span>
              </div>
            </div>
          </div>
          <div className="all-apps">
            <div className="section-title">
              All Apps <span className="arrow">&nbsp;&nbsp;&nbsp;{">"}</span>
            </div>
          </div>
          <div className="recommendations">
            <div className="section-recommended">Recommended <span className='recommended-arrow'>More &nbsp; &nbsp;{">"}</span></div>
          </div>
          {/*menu footer*/}
          <div className='menu-footer'>
            <div className='menu-footer-pic'>
              <img className='profilePic-menu' src={ProfilePic} alt="bryan" />
              <span className='menu-name'>Bryan</span>
            </div>
            <FontAwesomeIcon icon={faPowerOff} className="power-icon" onClick={togglePowerOptions} />
            {showPowerOptions && (
              <div className="power-options">
                <div className="power-option">Shut Down</div>
                <div className="power-option">Sleep</div>
                <div className="power-option">Restart</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
