import React from "react";
import styles from "../styles/TextComponent.module.css";
import {motion, AnimatePresence} from 'framer-motion';

const TextComponent = ({ handleClick }) => {
  return (
    <div className={styles["blackpink-background"]}>
      <div className={styles["text-container"]} style={{position: 'relative'}}>
        <h1 className={styles.text}>
          B
          <span className={styles["clickable-L"]} onClick={handleClick}>
            L
          </span>
          ACKPINK
        </h1>
        <div className={styles["lyric-container"]}>
          <AnimatePresence>
          <span className={styles['musical-note']}>&#9835; </span>
          <motion.span 
          className={styles.lyric}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1, ease: "easeInOut"}}
          key="song lyric"
          >'Cause we got bodies on bodies like this a slow dance
          </motion.span>
          <span className={styles['musical-note']}> &#9835;</span>
          </AnimatePresence>
        </div>
        
      </div>
    </div>
  );
};

export default TextComponent;
