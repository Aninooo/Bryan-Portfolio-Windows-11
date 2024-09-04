import React from 'react';
import './Projects.css';
import ChatPulse from '../assets/chatpulse.png';

const Projects = () => {
  return (
    <div className="projects-section">

      <div className="projects-container">
        <div className="project-item">
          <h3>ChatPulse</h3>
          <p><a href="https://github.com/Aninooo/ChatPulse.git"><img className='chatpulse' src={ChatPulse} alt="" /></a></p>
          <p>ChatPulse allows users to join chat rooms, send messages, and share images with others in the same room. </p>
        </div>
        <div className="project-item">
          <h3>Proj 2</h3>
          <p>asda</p>
        </div>
        <div className="project-item">
          <h3>Proj 3</h3>
          <p>asdasd</p>
        </div>
        <div className="project-item">
          <h3>Proj 4</h3>
          <p>adasd</p>
        </div>
        <div className="project-item">
          <h3>Proj 5</h3>
          <p>SOON</p>
        </div>
        <div className="project-item">
          <h3>Proj 6</h3>
          <p>DASDAASDA</p>
        </div>
        <div className="project-item">
          <h3>Proj 7</h3>
          <p>ASDASD</p>
        </div>
        <div className="project-item">
          <h3>Proj 8</h3>
          <p>ASDASDAS</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
