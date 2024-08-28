import React, { useEffect, useState } from 'react';
import styles from './LandingPage.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

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
    <div className={`${styles.container} ${slideUp ? styles.blurBackground : ''}`}>
      <div className={styles.content}>
        <h1>{formattedTime}</h1>
        <p>{formattedDate}</p>
      </div>
      <div className={styles.icons}>
        <i className={`${styles.icon} fas fa-battery-three-quarters`}></i> 
        <i className={`${styles.icon} fas fa-wifi`}></i> 
        <i className={`${styles.icon} fas fa-lan`}></i> 
      </div>

    </div>
  );
}

export default LandingPage;
