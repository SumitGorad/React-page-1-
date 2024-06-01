import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import myImage from './assets/image001.png';

import React from 'react';

function App() {
  return (
    <div className="container">
      <header>
        <div className="logo1">
            <img src='./src/assets/mainlogo.png'  alt="Logo" />
            <span>File Your Income Tax Return</span>
          </div>
        <div className="logo1">
            <img src='./src/assets/mainlogo.png'  alt="Logo" />
            <span className="welcome-message">Welcome Rahul Khaire</span>
          </div>
      </header>
      <main>
        <div className="content">
          <h1>Filing Income Tax Return</h1>
        </div>
        <div className="image">
          <img src={myImage} alt="Person pointing" />
        </div>
      </main>
      <div className="info">
        <div className="ticket">
          Your Ticket Number: <span>XEC16BEG</span>
        </div>
        <div className="referral">
          Your Referral Code: <span>WSMAY2024</span>
          <button className="share-btn">Share Referral Code via WhatsApp</button>
        </div>
      </div>
      <div className="form">
        <p>Please fill out the below form.</p>
        <form>
            <div className="form-button">
            <button type="button" className="salaried">Salaried</button>
            <button type="button" className="business">Business</button>
          </div><br/>
          <div className="form-row">
            <input type="text" placeholder="Full Name*" required /><br/>
            <input type="text" placeholder="Phone*" required />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email*" required />
            <input type="password" placeholder="ITR Account Password*" required />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Bank Account Number*" required />
            <input type="text" placeholder="Bank IFSC Code Number*" required />
          </div>
          <div className="form-row">
            <input type="file" placeholder="Upload PAN Card*" required />
            <input type="file" placeholder="Upload Aadhaar Card*" required />
          </div>
          <div className="form-row">
            <input type="file" placeholder="Upload Form 16*" required />
              <div className="download-excel">
                <span>OR</span>
                <label className='box'>if you do not have form16,you can download the excel sheet using the button </label>
                <button className="download-btn">Download Excel</button></div></div><br/>
                <div className="form-row">
              <input type="file" placeholder="Upload Excel Sheet*" required />
              </div>
          <div className="form-buttons">
            <button type="submit" className="submit-btn">SUBMIT</button>
            <button type="button" className="cancel-btn">CANCEL</button>
          </div>
        </form>
      </div>
      <footer>
      <div><img src='./src/assets/mainlogo.png'  alt="logo1" /></div>
        <div className="footer-logo">File Your Income Tax Return</div>
        <span>
          File Your Income Tax Return is associated with Bivrachandra Innovative Solutions Pvt. Ltd. We are on a mission to simplify the tax filing process for individuals and businesses alike. Whether you are filing for the first time or a seasoned taxpayer, we are here to assist you.
        </span>
        <hr></hr>
        <div className="footer-contact">
          <span>Call us: +91 9272090925/9272090926</span>
          
          <span>   Email: <a href="mailto:contact@fileyourincometaxreturn.com">mailto:contact@fileyourincometaxreturn.com</a></span>
          <div className="footer-links">
            <a href="#">Contact Us</a>
            <a href="#">About Us</a>
            <a href="#">Refund Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
        <div><span><img src='./src/assets/facebook.png'  alt="Facebook Logo" /></span>
        <span><img src='./src/assets/instagram.png'  alt="Instagram Logo" /></span>
        <span><img src='./src/assets/linkedin.png'  alt="linkedin Logo" /></span>
        <span><img src='./src/assets/youtube.png'  alt="Youtube Logo" /></span>
        </div>
      </footer>
    </div>
  );
}

export default App;