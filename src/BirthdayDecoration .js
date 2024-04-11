import styled from 'styled-components';
import Balloon from './Balloon';
import cake from './img/cake.jpg';
// import bdGirl from './img/birthday_girl.jpg';
import example from './img/example_girl.jpg';
import Stars from './Stars';
import { useState } from 'react';

const BirthdayDecorationStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1; /* Ensures background stays behind content */
`;

const Cake = styled.img`
  width: 300px;
  height: 200px;
  object-fit: contain; /* Scales image to fit within container */
`;

const Candle = styled.div`
  width: 10px;
  height: 50px;
  background-color: orange;
  border-radius: 50px 50px 0 0; /* Rounded top */
  position: relative;
  margin: 0 5px;
  animation: flicker 1.5s infinite alternate;
  @keyframes flicker {
    from { opacity: 1; }
    to { opacity: 0.5; }
  }

  &::after {
    content: '';
    width: 5px;
    height: 10px;
    background-color: yellow;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const StarsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Prevents stars from capturing clicks */
`;

const Star = styled.div`
  width: 5px;
  height: 5px;
  background-color: gold;
  border-radius: 50%;
  position: absolute;
  animation: twinkle 2s infinite ease-in-out alternate;
  @keyframes twinkle {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

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
  const [balloons] = useState([1, 2, 3]); // Array for number of balloons

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
      <Cake src={cake} alt="Birthday Cake" />
      {balloons.map((_, index) => (
        <Balloon key={index} color={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
      ))}
      <div style={{ display: 'flex', gap: '10px' }}>
        {Array(3).fill(null).map((_, index) => <Candle key={index} />)}
      </div>
      <StarsContainer>
        {renderStars(100)}  {/* Assuming Stars component accepts a "count" prop */}
      </StarsContainer>
    </BirthdayDecorationStyle>
  );
};

export default BirthdayDecoration;