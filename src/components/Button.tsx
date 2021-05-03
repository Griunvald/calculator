import React from 'react';
import './Button.css';

interface Props {
  value: string;
  className: string;
  // onClick: () => string;
}

const Button: React.FC<Props> = ({ value, className }) => {
  return <div className={className}>{value}</div>;
};

export default Button;
