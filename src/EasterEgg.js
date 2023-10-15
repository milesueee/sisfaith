import React, { useState, useEffect } from 'react';

function EasterEgg({ gifUrl }) {
  const [showGif, setShowGif] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'love') {
        setShowGif(true);

        // Set a timer to hide the GIF after a few seconds (e.g., 3 seconds)
        setTimeout(() => {
          setShowGif(false);
        }, 3000);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div>
      {showGif && <img src={https://giphy.com/gifs/warnerbrosde-R6gvnAxj2ISzJdbA63} alt="Easter Egg" />}
    </div>
  );
}

export default EasterEgg;
