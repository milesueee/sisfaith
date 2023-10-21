import React, { useState, useEffect } from 'react';

function EasterEgg({ gifUrl }) {
  const [showGif, setShowGif] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'c') {
        setShowGif(true);

        // Set a timer to hide the GIF after a few seconds (e.g., 3 seconds)
        setTimeout(() => {
          setShowGif(false);
        }, 10000);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div>
      {showGif && <img src={gifUrl} alt="Easter Egg" />}
    </div>
  );
}

export default EasterEgg;



