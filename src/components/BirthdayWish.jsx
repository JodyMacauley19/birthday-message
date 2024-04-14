import React, { useEffect, useState, memo } from 'react';
import styles from '../styles/BirthdayWish.module.css';
import {motion, AnimatePresence} from 'framer-motion';

const wishes = [
  "Wishing you all the best on your birthday!",
  "May all your wishes come true.",
  "May your day be filled with joy and laughter!",
  "Wishing you a year filled with blessings and success.",
  "May all your dreams come true on your special day!",
]

const BirthdayWish = () => {
  const [currentWishIndex, setCurrentWishIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWishIndex((prevIndex) => (prevIndex + 1) % wishes.length);
    }, 3500); // Change delay to 3 seconds (adjust as needed)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <AnimatePresence>
      <motion.p 
    className={styles['birthday-wish']} 
    initial={{opacity: 0}} 
    animate={{opacity: 1}} 
    transition={{duration: 3, ease: "easeInOut"}}
    key={currentWishIndex}>
      {wishes[currentWishIndex]}
    </motion.p>
    </AnimatePresence>
    
  );
};

export default memo(BirthdayWish);