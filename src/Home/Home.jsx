import React from 'react';
import recycleBinImage from '../assets/recycle-bin.png';
import './Home.css'; 

function HomePage() {
  const handleRecycleBinClick = () => {
    alert('Recycle Bin Clicked!'); 
  };

  return (
    <div className="homePage">
      <h1>Hi, I'm Bryan Lomerio</h1>
      <img
        src={recycleBinImage}
        alt="Recycle Bin"
        className="recycle-bin-img"
        onClick={handleRecycleBinClick}
      />
    </div>
  );
}

export default HomePage;
