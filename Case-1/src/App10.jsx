import React from 'react';
import './App10.css';

const App10 = () => {
  return (
    <div className="container">
      <h1>Simplify Your Tax Filing:</h1>
      <h2>Explore Three Convenient Options</h2>
      <div className="options">
        <div className="option">
          <div className="icon">📋</div>
          <h3>Register an account</h3>
          <p>First, get yourself registered on our platform with all the required details.</p>
        </div>
        <div className="option">
          <div className="icon">📁</div>
          <h3>Upload Documents</h3>
          <p>Upload documents to support your income for a smooth ITR filing. Required Files (Form & Excel).</p>
        </div>
        <div className="option">
          <div className="icon">💳</div>
          <h3>Make Payment</h3>
          <p>Once you confirm the documents, the payment is processed.</p>
        </div>
      </div>
      <button className="file-button">File ITR Now</button>
    </div>
  );
};

export default App10;
