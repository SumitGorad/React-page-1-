import React from 'react';
import './BenefitsSection.css';

const benefits = [
  {
    title: "Assuredly maximize your returns",
    description: "By filing your income tax return (ITR) on time, you can ensure that you claim all eligible deductions and exemptions, optimizing your potential tax savings.",
    icon: "./src/assets/camera.png" 
  },
  {
    title: "Build financial credibility",
    description: "Filing your ITR regularly establishes a record that can enhance your credibility when applying for loans or seeking better financial opportunities.",
    icon: "./src/assets/camera.png" 
  },
  {
    title: "Avoid penalties consistently",
    description: "Timely ITR filing helps you steer clear of penalties and legal complications.",
    icon: "./src/assets/camera.png" 
  },
  {
    title: "Track your financial progress",
    description: "Filing your ITR provides valuable insights into your income, expenses, and investments, allowing you to make informed decisions.",
    icon: "./src/assets/camera.png" 
  },
];

const BenefitsSection = () => {
  return (
    <div className="benefits-section">
      <h2>Maximize the <span className="highlight">Benefits</span> of Filing ITR</h2>
      <p className="subheading">Seize the advantages of comprehensive ITR submissions.</p>
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

export default BenefitsSection;
