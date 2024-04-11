import React, { useState, useEffect } from 'react';
import StyledMessage from '../StyledMessage';
import Characteristic from '../Characteristic';


function BirthdayMessage() {
  const [message, setMessage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const characteristics = [
    'Amazing',
    'Beautiful',
    'Strong',
    'Intelligent',
    'Kind',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % characteristics.length);
    }, 3000);

    setMessage('Happy Birthday!');

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [characteristics.length]);

  const characteristicVariants = {
    enter: (opacity = 0) => ({ opacity }),
    exit: (opacity = 0) => ({ opacity }),
  };

  return (
    <div className="birthday-message">
      <StyledMessage>
        {message.split('').map((char, index) => (
          <Characteristic key={index}>{char}</Characteristic>
        ))}
      </StyledMessage>
      <br />
      {/* Renders the current characteristic directly */}
      <Characteristic
        variants={characteristicVariants}
        initial="enter"
        animate="exit"
        exit="enter"
        transition={{ duration: 1 }}
      >
        {characteristics[currentIndex]}
      </Characteristic>
    </div>
  );
}

export default BirthdayMessage;