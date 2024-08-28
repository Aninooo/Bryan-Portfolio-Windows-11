import React, { useState } from 'react';
import ProfilePic from "../assets/login/bryan.webp";
import './Login.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function LoginScreen({ onLogin }) {
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 
  const [showPowerMenu, setShowPowerMenu] = useState(false);
  const [showSignInOptions, setShowSignInOptions] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showShutdownPopup, setShowShutdownPopup] = useState(false);
  const [shutdown, setShutdown] = useState(false);

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
    if (password === '') {
      alert('Please enter your PIN.');
    } else if (!/^\d+$/.test(password)) {
      setErrorMessage('Invalid PIN. Please enter only digits.');
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        onLogin(); 
      }, 2000);
    }
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  const handleShutdownClick = () => {
    setShowShutdownPopup(true);
  };

  const confirmShutdown = () => {
    setShowShutdownPopup(false);
    setShutdown(true);
    setTimeout(() => {
      setShutdown(false);
      window.close(); 
    }, 2000);
  };

  const cancelShutdown = () => {
    setShowShutdownPopup(false);
  };

  return (
    <div className="container">
      <div className="backgroundImage"></div>
      <div className="contentWrapper">
        {loading || shutdown ? (
          <div className="loading">
            <p>{shutdown ? "Shutting down..." : "Loading..."}</p>
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
            <form className="inputContainer" onSubmit={handleFormSubmit}>
              <input
                type="password"
                placeholder="PIN"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMessage('');
                }}
                className="input"
                autoComplete="off"
              />
              {errorMessage && <p className="errorMessage">{errorMessage}</p>}
              <button type="submit" className="hiddenSubmitButton" />
            </form>
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
            <button className="powerMenuOption" onClick={handleShutdownClick}>
              <i className="fas fa-power-off powerMenuIcon"></i> Shutdown
            </button>
            <button className="powerMenuOption">
              <i className="fas fa-moon powerMenuIcon"></i> Sleep
            </button>
            <button className="powerMenuOption">
              <i className="fas fa-sync-alt powerMenuIcon"></i> Restart
            </button>
          </div>
        )}
      </div>

      {showShutdownPopup && (
        <div className="shutdownPopup">
          <div className="popupContent">
            <p>Are you sure you want to shut down?</p>
            <div className="popupButtons">
              <button className="popupButtonYes" onClick={confirmShutdown}>Yes</button>
              <button className="popupButton" onClick={cancelShutdown}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginScreen;
