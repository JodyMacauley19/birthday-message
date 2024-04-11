import styled from 'styled-components';

const Characteristic = styled.span`
  display: inline-block;
  margin: 0 10px;
  font-weight: bold;
  text-align: center;
  font-size: 2em;
  color: gold;
  border-radius: 5px;
  padding: 5px;
  animation: changeColor 3s infinite alternate;

  @keyframes changeColor {
    from {
      color: #f08080;
    }
    to {
      color: #ff0;
    }
  }
`;

export default Characteristic;
