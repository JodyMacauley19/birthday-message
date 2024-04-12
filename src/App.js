import React, { useState } from "react";
import TextComponent from "./components/TextComponent";
import HappyBirthdayMessage from "./components/HappyBirthdayMessage";
import ConfettiComponent from "./components/ConfettiComponent";
import BirthdayGirlImage from "./components/BirthdayGirlImage";
import BirthdayWish from "./components/BirthdayWish";
import BrickBackground from "./components/BrickBackground";
import BirthdayGreetingContainer from "./components/BirthdayGreetingContainer";
import "./styles.css";

const App = () => {
  const [showBirthdayGreeting, setShowBirthdayGreeting] = useState(false);

  const handleClick = () => {
    setShowBirthdayGreeting(true);
  };

  return (
      <div className="container">
        {!showBirthdayGreeting && <TextComponent handleClick={handleClick} />}
        {showBirthdayGreeting && (
          <div className="row justify-content-center">
            <ConfettiComponent />
            <BrickBackground />
            <BirthdayGreetingContainer>
              <div className="greeting-content">
                <HappyBirthdayMessage />
                <BirthdayGirlImage />
                <BirthdayWish />
              </div>
            </BirthdayGreetingContainer>
          </div>
        )}
      </div>
  );
};

export default App;
