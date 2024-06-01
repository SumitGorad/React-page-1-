import React from 'react';
import './App12.css';

const App12 = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact us!</h2>
        <form>
          <label>
            Name
            <input type="text" name="name" />
          </label>
          <label>
            Email
            <input type="email" name="email" />
          </label>
          <label>
            Phone
            <input type="tel" name="phone" />
          </label>
          <label>
            Message
            <textarea name="message" />
          </label>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
      <div className="contact-info">
        <p>Call us: +919272009925 / 9272009926</p>
        <p>Email: contact@safeypointcometareturn.com</p>
        <img src="./src/assets/ITR2.jpg" alt="People clapping" />
      </div>
    </div>
  );
};

export default App12;