import React, { useState } from "react";
import TextComponent from "./components/TextComponent";
import ConfettiComponent from "./components/ConfettiComponent";
import BrickBackground from "./components/BrickBackground";
import BirthdayGreetingContainer from "./components/BirthdayGreetingContainer";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showBirthdayGreeting, setShowBirthdayGreeting] = useState(false);

  const handleClick = () => {
    setShowBirthdayGreeting(true);
  };

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div
      className="container p-0"
      style={{
        overflow: "hidden",
        width: "100vw",
        height: "100vh",
        maxWidth: "100%",
        backgroundColor: "pink",
      }}
    >
      {!showBirthdayGreeting && <TextComponent handleClick={handleClick} />}
      {showBirthdayGreeting && (
        <div className="row justify-content-center">
          <ConfettiComponent />
          <BrickBackground />
          <button className="toggle-button" onClick={handleToggleVisibility}>
        {isVisible ? "Hide Wish 🫣" : "Show Wish 🙂"}
      </button>
          {isVisible && <BirthdayGreetingContainer />}
        </div>
      )}
    </div>
  );
};

export default App;
