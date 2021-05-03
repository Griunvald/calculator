import React from 'react';
import './Button.css';

interface Props {
  value: string;
  // onClick: () => string;
}

const Button: React.FC<Props> = ({ value }) => {
  return <div className="button">{value}</div>;
};

export default Button;
