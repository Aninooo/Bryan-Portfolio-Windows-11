import React, { useState, useEffect, useRef } from 'react';
import recycleBinImage from '../assets/recycle-bin.png';
import Folder from '../assets/folder.png';
import Vscode from '../assets/vscode.png';
import resumePdf from '../assets/lomerio_resume.pdf';
import Footer from './Footer';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMinimize, faExpand, faCompress, faTimes } from '@fortawesome/free-solid-svg-icons';

function HomePage() {
  const [positions, setPositions] = useState({
    recycleBin: { top: '50px', left: '10px' },
    folder: { top: '150px', left: '20px' },
    vscode: { top: '250px', left: '14px' },
  });

  const [showResume, setShowResume] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [pdfPosition, setPdfPosition] = useState({ top: '50px', left: '50px' });
  const [pdfSize, setPdfSize] = useState({ width: '500px', height: '600px' });

  const pdfRef = useRef(null);
  const startDragPosition = useRef({ x: 0, y: 0 });

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

  const openVsCode = () => {
    window.location.href = 'vscode://file/';
  };

  const openResume = () => {
    setShowResume(true);
    setIsMaximized(false);
  };

  const closeResume = () => {
    setShowResume(false);
    setIsMaximized(false);
  };

  const maximizeResume = () => {
    setIsMaximized(true);
    setPdfPosition({ top: '0', left: '0' });
    setPdfSize({ width: '100vw', height: '100vh' });
  };

  const restoreResume = () => {
    setIsMaximized(false);
    setPdfSize({ width: '500px', height: '600px' });
    setPdfPosition({ top: '50px', left: '50px' });
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    startDragPosition.current = { x: e.clientX, y: e.clientY };

    const handleMouseMove = (e) => {
      if (pdfRef.current) {
        const dx = e.clientX - startDragPosition.current.x;
        const dy = e.clientY - startDragPosition.current.y;
        const newTop = pdfRef.current.offsetTop + dy;
        const newLeft = pdfRef.current.offsetLeft + dx;
        setPdfPosition({ top: `${newTop}px`, left: `${newLeft}px` });
        startDragPosition.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      className="homePage"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <h1></h1>

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
        <img
          src={Folder}
          alt="Resume"
          className="resume-icon"
          onClick={openResume}
        />
        <span className="resume-label">Resume</span>
      </div>

      <div
        className="vscode-container"
        style={{ top: positions.vscode.top, left: positions.vscode.left }}
        draggable
        onDragStart={(e) => handleDragStart(e, 'vscode')}
      >
        <img
          src={Vscode}
          alt="VS Code"
          className="vscode-icon"
          onClick={openVsCode}
        />
        <span className="vscode-label">VS Code</span>
      </div>

      {showResume && (
        <div
          className="pdf-container"
          ref={pdfRef}
          style={{
            top: pdfPosition.top,
            left: pdfPosition.left,
            width: pdfSize.width,
            height: pdfSize.height,
          }}
        >
          <div
            className="pdf-header"
            onMouseDown={handleMouseDown}
          >
            <button className="pdf-button1" onClick={isMaximized ? restoreResume : maximizeResume}>
              <FontAwesomeIcon icon={isMaximized ? faCompress : faExpand} />
            </button>
            <button className="pdf-button2" onClick={closeResume}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <iframe
            src={resumePdf}
            title="Resume PDF"
            width="100%"
            height="100%"
            className="pdf-viewer"
          />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default HomePage;
