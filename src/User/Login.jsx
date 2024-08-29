import React, { useState, useEffect, useRef } from 'react';
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
  const [blackScreenVisible, setBlackScreenVisible] = useState(false);
  const [sleepMode, setSleepMode] = useState(false);
  const [sleepLoading, setSleepLoading] = useState(false);
  const [showForgotPinPopup, setShowForgotPinPopup] = useState(false);

  const powerMenuRef = useRef(null);

  const handleForgotPIN = () => {
    setShowForgotPinPopup(true);
  };

  const handlePowerClick = () => {
    setShowPowerMenu(prev => !prev);
  };

  const handleSignInOptionsClick = () => {
    setShowSignInOptions(!showSignInOptions);
  };

  const handleLogin = () => {
    if (password === '') {
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
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setBlackScreenVisible(true);
      setTimeout(() => {
        window.close();
      }, 1000);
    }, 2000);
  };

  const cancelShutdown = () => {
    setShowShutdownPopup(false);
  };

  const handleSleepClick = () => {
    setSleepLoading(true); 
    setTimeout(() => {
      setSleepMode(true);
      setBlackScreenVisible(true);
      setSleepLoading(false); 
    }, 2000); 
  };

  const cancelSleepMode = () => {
    setSleepMode(false);
    setBlackScreenVisible(false);
  };

  const getTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleWakeUp = () => {
    if (blackScreenVisible || sleepMode) {
      setBlackScreenVisible(false);
      setSleepMode(false);
    }
  };

  useEffect(() => {
    const handleMouseClick = (event) => {
      if (powerMenuRef.current && !powerMenuRef.current.contains(event.target) && !event.target.closest('.fa-power-off')) {
        setShowPowerMenu(false);
      }
      handleWakeUp();
    };

    const handleKeyPress = () => handleWakeUp();

    window.addEventListener('click', handleMouseClick);
    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('click', handleMouseClick);
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [blackScreenVisible, sleepMode]);

  return (
    <div className="container">
      <div className="backgroundImage"></div>
      <div className="contentWrapper">
        {loading && !blackScreenVisible ? (
          <div className="loading">
            <p>Loading...</p>
            <div className="spinner">
              <div></div>
            </div>
          </div>
        ) : sleepLoading ? ( 
          <div className="loading">
            <p>Preparing sleep mode...</p>
            <div className="spinner">
              <div></div>
            </div>
          </div>
        ) : sleepMode ? (
          <div className="sleepScreen">
            <p className="sleepTime">{getTime()}</p>
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
          <div className="powerMenu" ref={powerMenuRef}>
            <button className="powerMenuOption" onClick={handleShutdownClick}>
              <i className="fas fa-power-off powerMenuIcon"></i> Shutdown
            </button>
            <button className="powerMenuOption" onClick={handleSleepClick}>
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
              <button className="popupButtonNo" onClick={cancelShutdown}>No</button>
            </div>
          </div>
        </div>
      )}

      {showForgotPinPopup && (
        <div className="forgotPinPopup">
          <div className="popupContent">
            <p>Just enter any number and press Enter</p>
            <button className="closePopupButton" onClick={() => setShowForgotPinPopup(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Black Screen */}
      {blackScreenVisible && !sleepMode && (
        <div className="blackScreen"></div>
      )}
    </div>
  );
}

export default LoginScreen;
