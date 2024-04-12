import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from '../styles/BirthdayWords.module.css';


const BirthdayWords = () => {
  const words = [
    "Awesome",
    "Fantastic",
    "Wonderful",
    "Kind",
    "Beautiful",
    "Smart",
    "Supportive",
    "Creative",
    "Foodie",
    "ARMY",
    "BTS",
    "BLACKPINK",
    "Caring",
    "Intelligent",
    "Talented",
    "Chef",
    "Telephilia",
    "K-popers",
    "K-drama fan",
    "Fun",
    "Well-expressed",
    "Leo",
    "Hard worker",
    "Disciplined",
    "Jennie",
    "Lisa",
    "Rosé",
    "Jisoo",
    "BOOMBAYAH",
    "DDU-DU DDU-DU",
    "Kill This Love"
  ];

  const wordStyle = (index) => {
    const fontSize = `${Math.floor(20 + Math.random() * 80)}px`;
    const colorClass = index % 2 === 0 ? styles['birthday-word--black'] : styles['birthday-word--pink'];
  
    return {
      fontSize,
      display: 'inline-block',
      margin: '20px',
      width: 'fit-content',
      textAlign: 'center',
      className: `${styles['birthday-word']} ${colorClass}`,
    };
  };

  return (
    <div className="birthday-words-container">
      {words.map((word, index) => (
        <CSSTransition key={word} timeout={100} classNames={word}>
          <span style={wordStyle(index)}>{word}</span>
        </CSSTransition>
      ))}
    </div>
  );
};

export default BirthdayWords;
