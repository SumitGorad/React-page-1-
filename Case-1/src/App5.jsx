import React from 'react';
import './App5.css';

const benefits = [
  {
    description: "Simplify Your Taxes: Save Your Tax Ensure You.Benefit from All Current Deducation",
    icon: "./src/assets/camera.png" 
  },
  {
    description: "Get a Financial plan designed for your unique income .",
    icon: "./src/assets/camera.png" 
  },
  {
    description: "Our Solutions guarantee your complete awarness of the most recent regulatory enactments.",
    icon: "./src/assets/camera.png" 
  },
  {
    description: "Our through approach ensure you claim every deductions you deserve, reducing your tax burden.",
    icon: "./src/assets/camera.png" 
  },
];

const App5 = () => {
  return (
    <div className="benefits-section">
      <h2>Discover <span className="highlight"> Tax-Saving </span> Option for Filing Your ITR</h2>
      <div className="benefits-cards">
        {benefits.map((benefit, index) => (
          <div className="benefit-card" key={index}>
            <div className="benefit-icon">
              <img src={benefit.icon} alt={`${benefit.title} icon`} />
            </div>
            <div className="benefit-content">
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App5;
