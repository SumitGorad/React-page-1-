import React from 'react';
import './App6.css';

const App6 = () => {
  return (
    <div className="container">
      <h2>Choose Customized Plan For ITR Filing</h2>
      <p>
        Streamline your e-filing process with a secure Digital Signature Certificate. This digital equivalent of your physical signature ensures authenticity and ease of ITR tax filing.
      </p>
      <div className="plans">
        <div className="plan">
          <h3>Income<br/>1 Lacs to 5 Lacs</h3>
          <div className="price">₹ 499/year</div>
          <p className="tax-note">*Exclusive of Taxes</p>
          <ul>
            <li>Single & Multiple Employers</li>
            <li>Single & Multiple House Property</li>
            <li>Income From Other Sources</li>
            <li>Agriculture Income</li>
          </ul>
          <button>GET STARTED</button>
        </div>
        <div className="plan">
          <h3>Income<br/>5 Lacs to 10 Lacs</h3>
          <div className="price">₹ 999/year</div>
          <p className="tax-note">*Exclusive of Taxes</p>
          <ul>
            <li>Single & Multiple Employers</li>
            <li>Single & Multiple House Property</li>
            <li>Income From Other Sources</li>
            <li>Agriculture Income</li>
          </ul>
          <button>GET STARTED</button>
        </div>
      </div>
    </div>
  );
};

export default App6;