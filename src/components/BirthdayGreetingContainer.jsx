import React from "react";
import styles from "../styles/BirthdayGreetingContainer.module.css";

const BirthdayGreetingContainer = ({ children }) => (
  <div className={styles["greeting-content"]}>{children}</div>
);

export default BirthdayGreetingContainer;
