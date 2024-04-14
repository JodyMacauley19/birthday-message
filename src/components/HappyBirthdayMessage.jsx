import React from 'react'
import styles from '../styles/HappyBirthdayMessage.module.css';
import {motion, AnimatePresence} from 'framer-motion';

const HappyBirthdayMessage = () => {
  return (
    <AnimatePresence>
      <motion.h1 
      className={styles['happy-birthday-message']}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1, ease: "easeIn"}}
      >Happy Birthday!</motion.h1>
    </AnimatePresence>
        
  );
};

export default HappyBirthdayMessage;
