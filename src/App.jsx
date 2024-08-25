import React, { useState } from 'react';
import LandingPage from './User/LandingPage.jsx'; 
import LoginScreen from './user/Login.jsx';      

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleEnter = () => {
    setShowLogin(true); 
  };

  return (
    <div>
      {showLogin ? <LoginScreen /> : <LandingPage onEnter={handleEnter} />}
    </div>
  );
}

export default App;
