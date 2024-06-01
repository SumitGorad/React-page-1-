import React from 'react';
import './App3.css';


function App3() {
  return (
    <div className="App3">
      <header className="header">
        <h1>Three Convenient Ways to File Your ITR Return</h1>
      </header>
      <div className="card-container">
        <div className="card">
          <img src='./src/assets/ITR1.jpg' alt="Digital Signature Certificate" className="card-image" />
          <div className="card-content">
            <h2>Use a Digital Signature Certificate (DSC):</h2>
            <p>
              Streamline your e-filing process with a secure Digital Signature Certificate. This digital
              equivalent of your physical signature ensures authenticity and ease of ITR tax filing.
            </p>
          </div>
        </div>
        <div className="card">
          <img src='./src/assets/ITR1.jpg' alt="E-filing without DSC" className="card-image" />
          <div className="card-content">
            <h2>E-filing of income tax return without a DSC:</h2>
            <p>
              Choose the hassle-free option of e-filing without a digital signature certificate. Generate an ITR-V
              form, print it, sign it, and send it to the Central Processing Center (CPC), Bangalore, within 30 days
              of e-filing. This option applies if Aadhaar details are not updated on the Income Tax site.
            </p>
          </div>
        </div>
        <div className="card">
          <img src='./src/assets/ITR1.jpg' alt="E-file with Aadhaar or Bank" className="card-image" />
          <div className="card-content">
            <h2>E-file and Verify with Aadhaar or Bank:</h2>
            <p>
              Simplify your e-filing experience by verifying your tax return through your Aadhaar number or bank
              account. This eliminates the need to submit the ITR-V form to CPC.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App3;