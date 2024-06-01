import React from 'react';
import './App8.css';

const App8 = () => {
  return (
    <div className="benefits-container">
      <h2>Maximize the <span className="highlight">Benefits</span> of Filing ITR</h2>
      <div className="benefits-grid">
        <div className="benefit-item">
        <div className="logo">
            <img src='./src/assets/camera.png'  alt="Logo" /></div>
          <h3>Convenience and Time-Saving</h3>
          <p>The online system guides you through the process, making it faster and simpler than paper filing.</p>
        </div>
        <div className="benefit-item">
        <div className="logo">
            <img src='./src/assets/camera.png'  alt="Logo" /></div>
          <h3>Financial Benefits</h3>
          <p>By consistently filing your income tax return, you build a strong financial history that can unlock better loan rates and deals.</p>
        </div>
        <div className="benefit-item">
        <div className="logo">
            <img src='./src/assets/camera.png'  alt="Logo" /></div>
          <h3>Avoid penalties consistently</h3>
          <p>Timely ITR filing helps you steer clear of penalties and legal complications.</p>
        </div>
        <div className="benefit-item">
        <div className="logo">
            <img src='./src/assets/camera.png'  alt="Logo" /></div>
          <h3>Track your financial progress</h3>
          <p>By consistently filing your income tax return, you build a strong financial history that can unlock better loan rates and deals.</p>
        </div>
      </div>
    </div>
  );
}

export default App8;
