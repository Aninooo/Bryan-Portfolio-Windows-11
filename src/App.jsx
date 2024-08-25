import React, { useState } from 'react';
import LandingPage from './User/LandingPage.jsx'; 
import LoginScreen from './User/Login.jsx';  
import Home from './Home.jsx';    

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
    <div>
      {!isLoggedIn ? (
        showLogin ? (
          <LoginScreen onLogin={handleLogin} />
        ) : (
          <LandingPage onEnter={handleEnter} />
        )
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
