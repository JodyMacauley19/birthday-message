import React from "react";
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
    "Jisoo",
    "Lisa",
    "Rosé",
    "Jennie",
    "BOOMBAYAH",
    "DDU-DU DDU-DU",
    "Kill This Love",
    "Motivator",
    "Inspires",
    "Ambitious",
    "Admirable",
    "Considerate",
    "Knowledgeable",
    "Resilient",
    "Clever",
    "Diligent",
    "Direct",
    "Faithful",
    "Funny",
    "Passionate",
    "Warmhearted",
    "Law Student",
    "You're doing well",
    "Keep pushing"
  ];

  const wordStyle = (index) => {
    const color = index % 2 === 0 ? 'grey' : 'grey';
    const isEven = index % 2 === 0;
  
    return {
      fontSize: isEven ? '50px' : '80px',
      display: 'inline-block',
      margin: '15px',
      width: 'fit-content',
      textAlign: 'center',
      color,
    };
  };

  return (
    <div className={styles["birthday-words-container"]} style={{backgroundColor: 'rgb(255, 231, 253)', width: 'fit-content'}}>
      {words.map((word, index) => (
          <span key={index} style={wordStyle(index)}>{word}</span>
      ))}
    </div>
  );
};

export default BirthdayWords;
