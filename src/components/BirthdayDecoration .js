import { useState } from 'react';
import BirthdayDecorationStyle from '../BirthdayDecorationStyle';
import StarsContainer from '../StarsContainer';
import Star from '../Star';
// import bdGirl from './img/birthday_girl.jpg';
import example from '../img/example_girl.jpg';
import Stars from './Stars';


const renderStars = (numStars) => {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    const left = Math.random() * 100 + 'vh';
    const top = Math.random() * 100 + 'vh';
    const delay = Math.random() * 2 + 's'; /* Random animation delays */
    stars.push(
      <Star key={i} style={{ left, top, animationDelay: delay }} />
    );
  }
  return stars;
};

const BirthdayDecoration = () => {

  return (
    <BirthdayDecorationStyle>
      <Stars />
      <img
        src={example}
        alt="Birthday Person"
        style={{
          width: '400px', // Adjust width as needed
          height: '300px', // Adjust height as needed
          position: 'absolute',
          top: '50%',
          left: '50%',
          borderRadius: '15px',
          transform: 'translate(-50%, -50%)',
          zIndex: -1, // Ensure image stays behind text
        }}
      />
      <StarsContainer>
        {renderStars(100)}  {/* Assuming Stars component accepts a "count" prop */}
      </StarsContainer>
    </BirthdayDecorationStyle>
  );
};

export default BirthdayDecoration;