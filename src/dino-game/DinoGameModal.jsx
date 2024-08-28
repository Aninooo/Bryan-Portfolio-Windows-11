import React from 'react';
import './DinoGameModal.css';

function DinoGameModal({ onClose }) {
  return (
    <div className="dino-game-modal">
      <div className="dino-game-modal-content">
        <button className="dino-game-modal-close" onClick={onClose}>X</button>
        <iframe
          src="https://chromedino.com/"
          frameBorder="0"
          scrolling="no"
          width="100%"
          height="100%"
          loading="lazy"
          title="Dino Game"
        ></iframe>
      </div>
    </div>
  );
}

export default DinoGameModal;
