import React from 'react';
import styles from '../styles/TextComponent.module.css';

const TextComponent = ({ handleClick }) => {
  return (
    <div className={styles['text-container']}>
      <h1 className={styles.text}>
        B<span className={styles['clickable-L']} onClick={handleClick}>L</span>ACKPINK
      </h1>
    </div>
  );
};

export default TextComponent;