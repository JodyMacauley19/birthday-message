import styled from 'styled-components';

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

export default BirthdayDecorationStyle;
