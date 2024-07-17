import React, { useEffect, useRef, useState } from 'react';
import Confetti from 'react-confetti';

const ConfettiComponent = () => {
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const confettiRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsConfettiActive(true);
    }, 1000); //Adjust delay in milliseconds

    // Set up an interval for continuous rain (optional)
    const confettiInterval = setInterval(() => {
      if (isConfettiActive) {
        confettiRef.current?.start();
      }
    }, 500); // Adjust interval for rain speed (milliseconds)

    return () => {
      clearInterval(confettiInterval); // Cleanup on unmount
      clearTimeout(timeoutId);
    }
  }, []);

  return (
    <div className="confetti-container">
      {isConfettiActive && <Confetti autoPlay numberOfPieces={100} interval={500} />} {/* Adjust pieces & interval */}
    </div>
  );
};

export default ConfettiComponent;