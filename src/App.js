import React, { useEffect, useState } from 'react';
import './App.css';
import Loader from './Loader';

function App() {
  const [loading, setLoading] = useState(true);

  const joy = [
    'https://imgur.com/VaBXlrE.jpg',
    'https://imgur.com/Lbqe15t.jpg',
    'https://imgur.com/gwm8noy.jpg',
    'https://imgur.com/rrQfYog.jpg',
    'https://imgur.com/HV6R2NB.jpg',
    'https://imgur.com/AOoqwcw.mp4',
  ];

  useEffect(() => {
    // Wait for 3 seconds before hiding the loader
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? <Loader /> : null}

      <div className="main-div">
        <h1>Welcome to your website, sis</h1>
        <h2>Stay as long as you'd like</h2>
      </div>

      <div className="social-media_container">
        <a href="https://github.com/milesueee">
          <img
            className="social-media_icon"
            src="https://i.imgur.com/qkgfyLX.png"
            alt="github"
          />
        </a>
      </div>

      <div className="blank"></div>

      <div className="joy-container">
        <h2 className="joy-title">pics mo gaga </h2>

          <div className="fadein">
              {joy.map((item, index) => (
                  // Check if the item ends with .mp4 to determine if it's a video
                  item.endsWith('.mp4') ? (
                          <video className="joy" controls autoPlay loop key={index}>
                              <source src={item} type="video/mp4" />
                              Your browser does not support the video tag.
                          </video>
                      ) : (
                          <img className="joy" src={item} alt={`joy ${index}`} />
                      )
              ))}
        </div>
      </div>

      <footer>
        ukininam met🤩🤌
      </footer>
    </div>
  );
}

export default App;
