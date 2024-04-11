import React, { useEffect, useRef } from 'react';
import Confetti from 'react-confetti';

const ConfettiComponent = () => {
  const confettiRef = useRef(null);

  useEffect(() => {
    // Trigger initial confetti burst on component mount
    confettiRef.current?.start();

    // Set up an interval for continuous rain (optional)
    const confettiInterval = setInterval(() => {
      confettiRef.current?.start();
    }, 1000); // Adjust interval for rain speed (milliseconds)

    return () => clearInterval(confettiInterval); // Cleanup on unmount
  }, []);

  return (
    <div className="confetti-container">
      <Confetti autoPlay numberOfPieces={50} interval={1000} /> {/* Adjust pieces & interval */}
    </div>
  );
};

export default ConfettiComponent;