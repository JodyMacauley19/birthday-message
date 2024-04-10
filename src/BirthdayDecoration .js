import styled from 'styled-components';
import cake from './img/cake.jpg';
import bdGirl from './img/birthday_girl.jpg';
import example from './img/example_girl.jpg';

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

const Balloon = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #f08080; /* Pink */
  margin: 0 10px;
  animation: float 3s infinite ease-in-out alternate;
  @keyframes float {
    from { transform: translateY(0px); }
    to { transform: translateY(20px); }
  }
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
        <Star key={i} style={{left, top, animationDelay: delay}} />
      );
    }
    return stars;
  };

const BirthdayDecoration = () => (
  <BirthdayDecorationStyle>
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
    {Array(5).fill(null).map((_, index) => <Balloon key={index} />)}
    <div style={{ display: 'flex', gap: '10px' }}>
      {Array(3).fill(null).map((_, index) => <Candle key={index} />)}
    </div>
    <StarsContainer>
      {renderStars(100)}  {/* Adjust number of stars as desired */}
    </StarsContainer>
  </BirthdayDecorationStyle>
);

export default BirthdayDecoration;