import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import { motion } from 'framer-motion';
import { characteristicVariants } from './characteristicVariants';

const Characteristic = ({ children }) => {
    return (
        <motion.h1
            className="text-center display-1 fw-bold text-gradient"
            variants={characteristicVariants} // Access from BirthdayMessage.js
            initial="enter"
            animate="exit"
            exit="enter"
            transition={{ duration: 1 }}
        >
            {children}
        </motion.h1>
    );
};

export default Characteristic;
