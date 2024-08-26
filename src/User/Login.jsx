import React, { useState } from 'react';
import ProfilePic from "../assets/login/bryan.jpg";
import './Login.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function LoginScreen({ onLogin }) {
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 
  const [showPowerMenu, setShowPowerMenu] = useState(false);
  const [showSignInOptions, setShowSignInOptions] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleForgotPIN = () => {
    alert('Forgot PIN clicked!');
  };

  const handlePowerClick = () => {
    setShowPowerMenu(!showPowerMenu);
  };

  const handleSignInOptionsClick = () => {
    setShowSignInOptions(!showSignInOptions);
  };

  const handleLogin = () => {
    if (/^\d+$/.test(password)) { 
      if (password) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          onLogin(); 
        }, 2000); 
      } else {
        alert('Please enter your PIN.');
      }
    } else {
      setErrorMessage('Invalid PIN. Please enter only digits.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="container">
      <div className="backgroundImage"></div>
      <div className="contentWrapper">
        {loading ? (
          <div className="loading">
            <div className="spinner">
              <div></div>
            </div>
          </div>
        ) : (
          <>
            <div className="profilePicContainer">
              <img
                src={ProfilePic}
                alt="Profile"
                className="profilePic"
              />
              <div className="userInfo">
                <p className="username">Bryan</p>
                <p>bryanlomerioanino@gmail.com</p>
              </div>
            </div>
            <div className="inputContainer">
              <input
                type="password"
                placeholder="PIN"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMessage('');
                }}
                className="input"
                onKeyPress={handleKeyPress}
              />
              {errorMessage && <p className="errorMessage">{errorMessage}</p>} 
            </div>
            <a href="#" onClick={handleForgotPIN} className="forgotPIN">
              I forgot my PIN
            </a>
            <div className="signInOptions">
              <button
                className="signInOptionsButton"
                onClick={handleSignInOptionsClick}
              >
                Sign-in options
              </button>
              {showSignInOptions && (
                <div className="signInOptionsMenu">
                  <i
                    className="fas fa-user signInOptionIcon"
                    title="Sign in with Face"
                  ></i>
                  <i
                    className="fas fa-key signInOptionIcon"
                    title="Sign in with PIN"
                  ></i>
                </div>
              )}
            </div>
          </>
        )}
      </div>
      <div className="bottomRightIcons">
        <i className="fas fa-power-off" onClick={handlePowerClick}></i>
        <i className="fas fa-wifi"></i>
        
        {showPowerMenu && (
          <div className="powerMenu">
            <button className="powerMenuOption">Sleep</button>
            <button className="powerMenuOption">Shutdown</button>
            <button className="powerMenuOption">Restart</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
