import styled from 'styled-components';

const Star = styled.div`
  width: 5px;
  height: 5px;
  background-color: gold;
  border-radius: 50%;
  position: absolute;
  animation: twinkle 2s infinite ease-in-out alternate;

  @keyframes twinkle {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default Star;
