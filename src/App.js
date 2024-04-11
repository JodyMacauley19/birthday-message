import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import TextComponent from "./components/TextComponent";
import HappyBirthdayMessage from "./components/HappyBirthdayMessage";
import ConfettiComponent from "./components/ConfettiComponent";
import BirthdayWords from "./components/BirthdayWords";
import BirthdayGirlImage from "./components/BirthdayGirlImage";
import BirthdayWish from "./components/BirthdayWish";
import BrickBackground from "./components/BrickBackground";
import "./styles.css";

const App = () => {
  const [showBirthdayGreeting, setShowBirthdayGreeting] = useState(false);

  const handleClick = () => {
    setShowBirthdayGreeting(true);
  };

  return (
    <div className="app">
      {!showBirthdayGreeting && <TextComponent handleClick={handleClick} />}
      {showBirthdayGreeting && (
        <div>
          <BrickBackground/>
          <BirthdayGreetingContainer>
            <div className="greeting-content">
              <ConfettiComponent />
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

const BirthdayGreetingContainer = ({ children }) => (
  <CSSTransition
    in={true} //Always animate in
    timeout={2000} //Adjust animation duration
    classNames="greeting"
  >
    {children}
  </CSSTransition>
);
