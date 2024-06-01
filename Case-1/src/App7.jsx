import React from 'react';
import './App7.css';

const App7 = () => {
  return (
    <div className="tax-advantage-container">
      <h2>Unlock Your Tax Advantage with Strategic ITR Filing</h2>
      <p>
        Leverage Save Your Tax, your exclusive source for tax planning insights, to unlock your full financial potential. Our dedicated team of experts provides personalized guidance for individuals and businesses.
      </p>
      <div className="services">
        <div className="service">
          <div className="icon tax-report-icon"></div>
          <h3>Tax Report</h3>
          <p>Produce a thorough tax report based on your investing activity</p>
        </div>
        <div className="service">
          <div className="icon investment-icon"></div>
          <h3>Investment</h3>
          <p>Receive thorough advice on investments that can lower your tax obligation</p>
        </div>
        <div className="service">
          <div className="icon guidance-icon"></div>
          <h3>Guidance</h3>
          <p>Obtain professional advice catered to your unique needs</p>
        </div>
        <div className="service">
          <div className="icon tax-planning-icon"></div>
          <h3>Tax Planning</h3>
          <p>One location for all tax planning (individual, business, NRI, capital gain)</p>
        </div>
      </div>
    </div>
  );
};

export default App7;