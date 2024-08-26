import React, { useState, useEffect } from 'react';
import recycleBinImage from '../assets/recycle-bin.png';
import Footer from './Footer';
import './Home.css'; 
import Folder from '../assets/folder.png';
import Vscode from '../assets/vscode.png';

function HomePage() {
  const [positions, setPositions] = useState({
    recycleBin: { top: '50px', left: '10px' }, 
    folder: { top: '150px', left: '20px' }, 
    vscode: { top: '250px', left: '14px' }, 
  });

  useEffect(() => {
    const savedPositions = localStorage.getItem('iconPositions');
    if (savedPositions) {
      setPositions(JSON.parse(savedPositions));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('iconPositions', JSON.stringify(positions));
  }, [positions]);

  const handleDragStart = (e, icon) => {
    e.dataTransfer.setData('icon', icon);
    const img = new Image();
    img.src = '';
    e.dataTransfer.setDragImage(img, 0, 0);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const icon = e.dataTransfer.getData('icon');
    if (icon) {
      const newPositions = { ...positions };
      newPositions[icon] = {
        top: `${e.clientY - 25}px`, 
        left: `${e.clientX - 25}px`,
      };
      setPositions(newPositions);
    }
  };

  return (
    <div
      className="homePage"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <h1>Portfolio ako ni bryan pero dipa tapos</h1>
      
      <div
        className="icon-container"
        style={{ top: positions.recycleBin.top, left: positions.recycleBin.left }}
        draggable
        onDragStart={(e) => handleDragStart(e, 'recycleBin')}
      >
        <img
          src={recycleBinImage}
          alt="Recycle Bin"
          className="recycle-bin-img"
          onClick={() => alert('Recycle Bin Clicked!')}
        />
        <span className="icon-label">Recycle Bin</span>
      </div>

      <div
        className="resume-container"
        style={{ top: positions.folder.top, left: positions.folder.left }}
        draggable
        onDragStart={(e) => handleDragStart(e, 'folder')}
      >
        <img src={Folder} alt="Resume" className="resume-icon" />
        <span className="resume-label">Resume</span>
      </div>

      <div
        className="vscode-container"
        style={{ top: positions.vscode.top, left: positions.vscode.left }}
        draggable
        onDragStart={(e) => handleDragStart(e, 'vscode')}
      >
        <img src={Vscode} alt="vscode" className="vscode-icon" />
        <span className="vscode-label">Vs Code</span>
      </div>

      <Footer /> 
    </div>
  );
}

export default HomePage;
