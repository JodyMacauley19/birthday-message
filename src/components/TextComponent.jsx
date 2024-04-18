import React, { useEffect, useState } from "react";
import styles from "../styles/TextComponent.module.css";
import { motion, AnimatePresence } from "framer-motion";
import blackpinkBG from "../img/blackpink.jpg";
import btsBG from "../img/bts.webp";
import babymonsterBG from "../img/babymonster.webp";

const kpopGroupImages = [blackpinkBG, btsBG, babymonsterBG];

const TextComponent = ({ handleClick }) => {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * kpopGroupImages.length);
    setBackgroundImage(kpopGroupImages[randomIndex]);
  }, []);

  const getMusicalNoteStyle = () => {
    return backgroundImage.includes("babymonster")
      ? { color: "black" }
      : { color: "white" };
  };

  return (
    <div
      className="container-fluid h-100"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        paddingBottom: "400px",
      }}
    >
      <div className="row h-100 d-flex justify-content-center align-items-center">
        <div className="col-10 text-center">
          <h1 className={`${styles["text"]} text-display text-uppercase`}>
            B
            <span className={`${styles["clickable-L"]}`} onClick={handleClick}>
              L
            </span>
            ACK
            <span style={{ color: "pink" }}>PINK</span>
          </h1>
          <div style={{ paddingBottom: "20px" }}>
            <AnimatePresence>
              <motion.span
                className={styles["musical-note"]}
                style={getMusicalNoteStyle()}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                &#9835;{" "}
              </motion.span>
              {backgroundImage.includes("blackpink") && (
                <motion.span
                  className={styles.lyric}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  Diamonds shining, drive in silence, I don't mind it, I'm
                  riding
                </motion.span>
              )}
              {backgroundImage.includes("bts") && (
                <motion.span
                  className={styles.lyric}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  Don't need no Usher to remind me you got it bad
                </motion.span>
              )}
              {backgroundImage.includes("babymonster") && (
                <motion.span
                  className={styles.lyric}
                  style={{ color: "black" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  Let me show you who we are Batter, batter, batter up
                </motion.span>
              )}
              <motion.span
                className={styles["musical-note"]}
                style={getMusicalNoteStyle()}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                {" "}
                &#9835;
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="row h-100 d-flex justify-content-center align-items-center">
        <p className={styles.copyright}>© 2024, Jody, All rights reserved.</p>
      </div>
    </div>
  );
};

export default TextComponent;
