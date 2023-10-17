import React, { useEffect} from 'react';
import './App.css';
import EasterEgg from './EasterEgg.js';

function App() {


 const joy = [
      'https://imgur.com/i1XwVNp.jpg',
  ]; 
 
  useEffect(() => {
  }, []);

  return (
    <div>
      <div className="main-div">
        <h1>helur sis</h1>
        <h2>mama mooo</h2>
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

      {/* Add the EasterEgg component with the GIF URL */}
      <EasterEgg gifUrl='./gif.gif' />
    </div>
  );
}

export default App;