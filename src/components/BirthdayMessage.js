import React, { useState, useEffect } from 'react';
import Characteristic from '../Characteristic'; // Updated Characteristic component
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import { characteristicVariants } from '../characteristicVariants';


const BirthdayMessage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const characteristics = [
    'Creative',
    'Intelligent',
    'Funny',
    'Kind',
    'Adventurous',
  ];

  const handleNextCharacteristic = () => {
    setCurrentIndex((prevState) => (prevState + 1) % characteristics.length);
  };

  useEffect(() => {
    const intervalId = setInterval(handleNextCharacteristic, 3000); // Change every 3 seconds
    return () => clearInterval(intervalId); // Clear interval on unmount
  }, []);

  return (
    <div className="birthday-message">
      {/* Static Happy Birthday Message */}
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 1 }} // Fade in animation for "Happy Birthday"
      >
        Happy Birthday
      </motion.h1>
      <br />

      {/* Animated Characteristic Text */}
      <Characteristic
        variants={characteristicVariants}
        initial="enter"
        animate="exit"
        exit="enter"
        transition={{ duration: 1 }}
        children={characteristics[currentIndex]}
      />
    </div>
  );
};

export default BirthdayMessage;
