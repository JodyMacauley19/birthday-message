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
      style={{
        position: "relative",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className={styles["text-container"]}>
        <h1 className={styles.text}>
          B
          <span className={styles["clickable-L"]} onClick={handleClick}>
            L
          </span>
          ACK
          <span style={{ color: "pink" }}>PINK</span>
        </h1>
        <div className={styles["lyric-container"]}>
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
                key="song lyric"
              >
                Diamonds shining, drive in silence, I don't mind it, I'm riding
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
      <p
        style={{
          position: "absolute",
          bottom: "5px",
          left: "50%",
          transform: "translate(-50%)",
          textAlign: "center",
          color: "grey",
          fontStyle: "italic",
        }}
      >
        © 2024, Jody, All rights reserved.
      </p>
    </div>
  );
};

export default TextComponent;
