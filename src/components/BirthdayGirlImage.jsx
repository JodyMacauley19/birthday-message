import React from "react";
import exampleImg from '../img/example_girl.jpg';
import styles from '../styles/BirthdayGirlImage.module.css';

const BirthdayGirlImage = () => {
    return (
            <img className={styles.BirthdayGirlImage} src={exampleImg} alt="Birthday Girl" />
    )
}

export default BirthdayGirlImage;