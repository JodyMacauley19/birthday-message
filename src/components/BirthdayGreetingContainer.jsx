import React from "react";
import styles from "../styles/BirthdayGreetingContainer.module.css";
import HappyBirthdayMessage from "./HappyBirthdayMessage";
import BirthdayGirlImage from "./BirthdayGirlImage";
import BirthdayWish from "./BirthdayWish";

const BirthdayGreetingContainer = () => (
  <div className={styles["greeting-content"]}>
    <HappyBirthdayMessage />
    <BirthdayGirlImage />
    <BirthdayWish />
  </div>
);

export default BirthdayGreetingContainer;
