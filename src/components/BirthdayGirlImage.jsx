import React from "react";
// import exampleImg from '../img/example_girl.jpg';
import exampleImg from '../img/bgirl_test.jpg';
import styles from '../styles/BirthdayGirlImage.module.css';
import {motion, AnimatePresence} from 'framer-motion';

const BirthdayGirlImage = () => {
    return (
        <AnimatePresence>
            <motion.img 
            className={styles.BirthdayGirlImage} 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 2, ease: "easeIn"}}
            src={exampleImg} 
            alt="Birthday Girl" />
        </AnimatePresence>
            
    )
}

export default BirthdayGirlImage;