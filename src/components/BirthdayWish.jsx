import React, { useEffect, useState } from 'react';
import styles from '../styles/BirthdayWish.module.css';
import {motion} from 'framer-motion';

const wishes = [
  "Wishing you all the best on your birthday!",
  "May all your wishes come true.",
  "May your day be filled with joy and laughter!",
  "Wishing you a year filled with blessings and success.",
  "May all your dreams come true on your special day!",
]

const BirthdayWish = () => {
  const [currentWishIndex, setCurrentWishIndex] = useState(0);

  const fade = {
    opacity: 1,
    initial: {opacity: 0},
    animate: {opacity: 1},
    transition: {duration: 1, ease: "easeInOut"}
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWishIndex((prevIndex) => (prevIndex + 1) % wishes.length);
    }, 3500); // Change delay to 3 seconds (adjust as needed)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.p className={styles['birthday-wish']} animate={fade} key={currentWishIndex}>
      {wishes[currentWishIndex]}
    </motion.p>
  );
};

export default BirthdayWish;