import React from 'react';
import './Button.css';

interface Props {
  value: string;
  // onClick: () => string;
}

const Button: React.FC<Props> = ({ value }) => {
  return <div className={`button ${value === '0' ? 'zero' : ''}`}>{value}</div>;
};

export default Button;
