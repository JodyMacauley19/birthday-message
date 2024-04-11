import React from "react";
import { CSSTransition } from "react-transition-group";

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
      transition: "opacity 0.5s ease-in-out",
    };

    const layoutStyles = {
      position: "relative",
      display: 'inline-block',
      margin: '20px',
      width: 'fit-content',
      textAlign: 'center'
    };

    return {...baseStyle, ...layoutStyles};
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
