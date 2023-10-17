import React, { useEffect} from 'react';
import './App.css';
import EasterEgg from './EasterEgg.js';

function App() {


  const joy = [
      'https://imgur.com/i1XwVNp.jpg',
      'https://imgur.com/vBFNY1y.jpg',
      'https://imgur.com/r8Z6xxa.jpg',
      'https://imgur.com/CwUkBLV.jpg',
    'https://imgur.com/VaBXlrE.jpg',
    'https://imgur.com/Lbqe15t.jpg',
    'https://imgur.com/gwm8noy.jpg',
      'https://imgur.com/Bzb0kep.jpg',
    'https://imgur.com/rrQfYog.jpg',
    'https://imgur.com/HV6R2NB.jpg',
    'https://imgur.com/AOoqwcw.mp4',
      'https://imgur.com/drmjC7L.jpg',
      'https://imgur.com/3CBqf7Q.jpg',
      'https://imgur.com/Hz2q8kb.jpg',
      'https://imgur.com/JzmydWm.jpg',
      'https://imgur.com/fOVeBzn.jpg',
      'https://imgur.com/DEfN4EF.jpg',
      'https://imgur.com/60R1OYO.mp4',
      'https://imgur.com/ODhg3fT.jpg',
      'https://imgur.com/vyB4R9Q.mp4',
      'https://imgur.com/7KkYivX.jpg',
      'https://imgur.com/93xfsoB.jpg',
      'https://imgur.com/5A8iRep.jpg',
      'https://imgur.com/7z9VbFA.jpg',
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
      <EasterEgg gifUrl="https://giphy.com/gifs/warnerbrosde-R6gvnAxj2ISzJdbA63" />
    </div>
  );
}

export default App;