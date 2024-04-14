import React, { useEffect, useState } from "react";
import styles from "../styles/TextComponent.module.css";
import {motion, AnimatePresence} from 'framer-motion';

const kpopGroupImages = [
  'https://e0.pxfuel.com/wallpapers/2/499/desktop-wallpaper-blackpink-concert-concert.jpg',
  'https://wallpapercave.com/wp/wp6853359.jpg',
  'https://wallpapercave.com/wp/wp12332554.jpg'
]

const TextComponent = ({ handleClick }) => {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * kpopGroupImages.length);
    setBackgroundImage(kpopGroupImages[randomIndex]);
  }, []);


  return (
    <div style={{position: 'relative', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', width: '100vw', height: '100vh'}}>
      <div 
        className={styles["text-container"]}>
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
