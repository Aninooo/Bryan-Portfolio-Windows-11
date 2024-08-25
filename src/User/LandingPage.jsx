import React, { useEffect, useState } from 'react';

function LandingPage({ onEnter }) {
  const [slideUp, setSlideUp] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        setSlideUp(true);
        setTimeout(() => {
          onEnter();
        }, 1000); 
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onEnter]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const formattedDate = currentTime.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.content,
          transform: slideUp ? 'translateY(-100vh)' : 'translateY(0)',
          opacity: slideUp ? 0 : 1,
          transition: 'transform 1s ease, opacity 1s ease',
        }}
      >
        <h1>{formattedTime}</h1>
        <p>{formattedDate}</p>
        <p>Press "Enter" to proceed to the login page</p>
      </div>
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
    backgroundColor: '#0078d4',
    color: '#fff',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    overflow: 'hidden',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default LandingPage;
