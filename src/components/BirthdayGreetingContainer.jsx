import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "../styles/BirthdayGreetingContainer.module.css";

const BirthdayGreetingContainer = ({ children }) => (
  <CSSTransition
    in={true} //Always animate in
    timeout={2000} //Adjust animation duration
    classNames={styles.greeting}
  >
    <div className={styles['greeting-content']}>
    {children}
    </div>
    
  </CSSTransition>
);

export default BirthdayGreetingContainer;
