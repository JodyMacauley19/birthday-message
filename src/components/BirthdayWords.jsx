import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from '../styles/BirthdayWords.module.css';


const BirthdayWords = () => {
  const words = [
    "Happy",
    "Birthday",
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
  ];

  const wordStyle = (index) => {
    const baseStyle = {
      fontSize: `${Math.floor(20 + Math.random() * 100)}px`,
      color: index % 2 === 0 ? "black" : "pink",
    };

    const layoutStyles = {
      position: "relative",
      display: 'inline-block',
      margin: '20px',
      width: 'fit-content',
      textAlign: 'center'
    };

    return {...baseStyle, ...layoutStyles, className: styles['birthday-word']};
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
