import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';

const StyledMessage = styled.h1`
  font-family: 'Amatic SC', cursive;
  font-size: 4em;
  color: #f08080;
  text-shadow: 2px 2px 0px rgba(255, 0, 0, 0.2);
  animation: shine 2s infinite alternate;
  text-align: center;


  @keyframes shine {
    from {
      text-shadow: 0 0 0 rgba(255, 0, 0, 0);
    }
    to {
      text-shadow: 2px 2px 0px rgba(255, 0, 0, 0.2);
    }
  }
`;

const Characteristic = styled(motion.span)`
  display: inline-block;
  margin: 0 10px;
  font-weight: bold;  /* Add emphasis to the characteristic word */
  text-align: center;
  font-size: 1.2em;
  background-color: #f0f0f0;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  animation: changeColor 3s infinite alternate;

  @keyframes changeColor {
    from {
      color: #f08080;
    }
    to {
      color: #ff0;
    }
  }
`;

function BirthdayMessage() {
  const [message, setMessage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isConfettiActive, setIsConfettiActive] = useState(false);
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
    setIsConfettiActive(true);

    // Simulate confetti animation for a few seconds
    setTimeout(() => setIsConfettiActive(false), 3000);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  const characteristicVariants = {
    enter: (opacity = 0) => ({ opacity }),
    exit: (opacity = 0) => ({ opacity }),
  };

  return (
    <div className="birthday-message">
      <StyledMessage>
        {message.split('').map((char, index) => (
          <Characteristic key={index} style={{backgroundColor: 'lightblue'}}>{char}</Characteristic>
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
      {isConfettiActive && <Confetti />}
    </div>
  );
}

export default BirthdayMessage;