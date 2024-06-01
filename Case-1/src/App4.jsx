import React from 'react';
import './App4.css';

function App4() {
  return (
    <div className="App4">
      <header className="header">
        <h1>File your Income Tax Return <span className="effort">EFFORTLESSLY</span></h1>
      </header>
      <div className="video-container">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/your_video_id"
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default App4;