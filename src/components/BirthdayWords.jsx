import React from "react";


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
    const fontSize = `${Math.floor(20 + Math.random() * 70)}px`;
    const color = index % 2 === 0 ? 'black' : 'pink';
  
    return {
      fontSize,
      display: 'inline-block',
      margin: '20px',
      width: 'fit-content',
      textAlign: 'center',
      color,
    };
  };

  return (
    <div className="birthday-words-container">
      {words.map((word, index) => (
          <span key={index} style={wordStyle(index)}>{word}</span>
      ))}
    </div>
  );
};

export default BirthdayWords;
