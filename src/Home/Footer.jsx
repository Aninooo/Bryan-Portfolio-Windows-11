import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Footer.css'; 
import Windows11 from '../assets/windows11.png'; 
import Chrome from '../assets/chrome.png';
import FileExplorer from '../assets/file-explorer.png';

const Footer = () => {
  const navigate = useNavigate(); 

  const openChromePage = () => {
    navigate('/chrome'); 
  };

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
    </div>
  );
}

export default Footer;
