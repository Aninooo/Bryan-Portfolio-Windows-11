import React from 'react';
import recycleBinImage from '../assets/recycle-bin.png';
import Footer from './Footer';
import './Home.css'; 
import Folder from '../assets/folder.png';
import Vscode from '../assets/vscode.png';

function HomePage() {
  const handleRecycleBinClick = () => {
    alert('Recycle Bin Clicked!'); 
  };

  return (
    <div className="homePage">
      <h1>Portfolio ako ni bryan pero dipa tapos
      </h1>
      <img
        src={recycleBinImage}
        alt="Recycle Bin"
        className="recycle-bin-img"
        onClick={handleRecycleBinClick}
      />
      <div className="resume-container">
  <img src={Folder} alt="Resume" className="resume-icon" />
  <span className="resume-label">Resume</span>
  <img src={Vscode} alt="vscode" />
  <span className='vscode-label'>Visual Studio Code</span>
</div>

      <Footer /> 
    </div>
  );
}

export default HomePage;
