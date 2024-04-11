import styled from 'styled-components';

const StarsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Prevents stars from capturing clicks */
`;

export default StarsContainer;
