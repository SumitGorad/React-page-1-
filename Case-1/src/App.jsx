import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import myImage from './assets/image001.png'
import myImage2 from './assets/mainlogo.png'

function App() {
  return (
     <div className="App">
      <header className="App-header">
        <div className="navbar">
          <div className="logo">
            <img src={myImage2}  alt="Logo" />
            <span>File Your Income Tax Return</span>
          </div>
          <div className="logo">
            <img src={myImage2}  alt="Logo" />
            <span className="welcome-message">Welcome Rahul Khaire</span>
          </div>
        </div>
      </header>
      <main className="main-content">
        <div className="content">
          <div className="rating">
            <span>Google Rating </span>
            <span className="stars">5.0 ★★★★★</span>
            <span>Based on 492 Reviews</span>
          </div>
          <h1>Your premier destination for expert accounting solutions</h1>
          <h6>Assisted ITR Filing platform For Start Your Tax Journey Today</h6>
          
        </div>
        <div className="image">
          <img src={myImage} alt="Person pointing" />
        </div>
      </main>
    </div>
  );
}

export default App
