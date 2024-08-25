import React, { useState } from 'react';
import ProfilePic from "../assets/login/bryan.jpg";
import "./Login.css"; // Correct the import path to match your file structure

function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Login successful!');
    }, 2000);
  };

  return (
    <div className="container">
      <div className="profilePicContainer">
        <img
          src={ProfilePic}
          alt="Profile"
          className="profilePic"
        />
      </div>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
      </div>
      <button onClick={handleLogin} className="loginButton">
        {isLoading ? (
          <div className="spinner"></div>
        ) : (
          'Login'
        )}
      </button>
    </div>
  );
}

export default LoginScreen;
