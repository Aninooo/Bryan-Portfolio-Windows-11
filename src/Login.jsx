import React, { useState } from 'react';
import ProfilePic from "./assets/login/Bryan.jpg"
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
    <div style={styles.container}>
      <div style={styles.profilePicContainer}>
        <img
          src={ProfilePic}
          alt="Profile"
          style={styles.profilePic}
        />
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
      </div>
      <button onClick={handleLogin} style={styles.loginButton}>
        {isLoading ? (
          <div style={styles.spinner}></div>
        ) : (
          'Login'
        )}
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f3f3f3',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  },
  profilePicContainer: {
    marginBottom: '20px',
  },
  profilePic: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    width: '300px',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  loginButton: {
    width: '300px',
    padding: '10px',
    marginTop: '20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#0078d4',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  },
  spinner: {
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #0078d4',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    animation: 'spin 1s linear infinite',
  },
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
};

export default LoginScreen;
