import styled from 'styled-components';

const StyledMessage = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Amatic SC', cursive;
  background-color: #f0f8ff;
  padding: 20px;
  border-radius: 10px;
  font-size: 4em;
  color: #f08080;
  text-shadow: 2px 2px 0px rgba(255, 0, 0, 0.2);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  animation: shine 2s infinite alternate;
  text-align: center;

  @keyframes shine {
    from {
      text-shadow: 0 0 0 rgba(255, 0, 0, 0);
    }
    to {
      text-shadow: 2px 2px 0px rgba(255, 0, 0, 0.2);
    }
  }
`;

export default StyledMessage;
