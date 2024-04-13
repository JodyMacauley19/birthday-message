import React, { useState } from "react";
import TextComponent from "./components/TextComponent";
import ConfettiComponent from "./components/ConfettiComponent";
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
          <BirthdayGreetingContainer />
        </div>
      )}
    </div>
  );
};

export default App;
