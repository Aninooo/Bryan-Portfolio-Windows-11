import React from 'react';
import './Footer.css'; 
import Windows11 from '../assets/windows11.png'; 
import Chrome from '../assets/chrome.png';
import FileExplorer from '../assets/file-explorer.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="taskbar">
        <img src={Windows11} alt="Windows 11" className="windows-icon" />
       <img src={Chrome} alt="Chrome" className='chrome-icon' />
        <img src={FileExplorer} alt="" className='fileExplorer-icon' />
      </div>
    </div>
  );
}

export default Footer;
