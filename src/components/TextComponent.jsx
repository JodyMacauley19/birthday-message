import React from 'react';


const TextComponent = ({ handleClick }) => {

    return (
      <div className="text-container" onClick={handleClick}>
        <h1 style={{ color: 'black', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)' }}>
          B<span className='clickable-l' onClick={handleClick} style={{ color: 'pink', textShadow: '0px 2px 2px rgba(255, 0, 130, 0.7)' }}>L</span>ACKPINK
        </h1>
      </div>
    );
  };
  
  export default TextComponent;
