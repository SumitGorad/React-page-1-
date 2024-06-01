import React from 'react';
import './Footer.css';
import myImage2 from './assets/mainlogo.png'

const Footer = () => {
  return (
    <footer>
    <div><img src={myImage2}  alt="Logo" /></div>
        <div className="footer-logo">File Your Income Tax Return</div>
        <span>
          File Your Income Tax Return is associated with Bivrachandra Innovative Solutions Pvt. Ltd. We are on a mission to simplify the tax filing process for individuals and businesses alike. Whether you are filing for the first time or a seasoned taxpayer, we are here to assist you.
        </span>
        <hr></hr>
        <div className="footer-contact">
          <span>Call us: +91 9272090925/9272090926</span>
          
          <span>  Email: <a href="mailto:contact@fileyourincometaxreturn.com">mailto:contact@fileyourincometaxreturn.com</a></span>
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

  );
};

export default Footer;