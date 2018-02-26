import React from 'react';

const Button = ({buttonText, onClick, className}) => {
  return (
       <button onClick={e => onClick(e)} className={className}>{buttonText}</button>
  );
}

export default Button;