import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './User/LandingPage.jsx'; 
import LoginScreen from './User/Login.jsx';  
import Home from './Home/Home.jsx';    
import ChromePage from './ChromePage.jsx'; 


function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEnter = () => {
    setShowLogin(true); 
  };

  const handleLogin = () => {
    setIsLoggedIn(true); 
  };

  return (
    <Router>
      <Routes>
        {!isLoggedIn ? (
          showLogin ? (
            <Route path="/" element={<LoginScreen onLogin={handleLogin} />} />
          ) : (
            <Route path="/" element={<LandingPage onEnter={handleEnter} />} />
          )
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/chrome" element={<ChromePage />} /> 
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
