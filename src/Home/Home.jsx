import React from 'react';
import recycleBinImage from '../assets/recycle-bin.png';
import Footer from './Footer'; // Correct import for Footer component
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
      <Footer /> {/* Add Footer component here */}
    </div>
  );
}

export default HomePage;
