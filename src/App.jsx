import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './User/LandingPage.jsx';
import LoginScreen from './User/Login.jsx';
import Home from './Home/Home.jsx';
import ChromePage from './ChromePage.jsx';
import Layout from './Layout.jsx';
import DinoGameModal from './dino-game/DinoGameModal.jsx'; // Import the Dino game modal

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEnter = () => {
    setShowLogin(true);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const openDinoGame = () => {
    setIsModalOpen(true);
  };

  const closeDinoGame = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/" element={showLogin ? <LoginScreen onLogin={handleLogin} /> : <LandingPage onEnter={handleEnter} />} />
          </>
        ) : (
          <Route path="/" element={<Layout />}>
            <Route index element={<Home openDinoGame={openDinoGame} />} />
            <Route path="/chrome" element={<ChromePage />} />
          </Route>
        )}
      </Routes>
     
    </Router>
  );
}

export default App;
