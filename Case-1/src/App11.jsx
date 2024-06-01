import React from 'react';
import './App11.css';

const App11 = () => {
  return (
    <div className="container">
      <h2>Frequently Asked Questions</h2>
      <div className="list">
        <div className="item">
          <div className="question">
            What is ITR filing?
            <span className="toggle">+</span>
          </div>
        </div>
        <div className="item">
          <div className="question">
            Can I file a revised return after ITR is processed?
            <span className="toggle">+</span>
          </div>
        </div>
        <div className="item">
          <div className="question">
            What happens if I don't file ITR?
            <span className="toggle">+</span>
          </div>
        </div>
        <div className="item">
          <div className="question">
            Can Save Your Tax assist in ITR filing for a partnership firm?
            <span className="toggle">+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App11;