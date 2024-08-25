import React, { useState } from 'react';
import LandingPage from './LandingPage';
import LoginScreen from './Login';

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
