import React, { MouseEvent } from 'react';
import './Button.css';

interface Props {
  value: string;
  className: string;
  onClick: (e: MouseEvent) => MouseEvent;
}

const Button: React.FC<Props> = ({ value, className, onClick }) => {
  return (
    <div onClick={onClick} className={className}>
      {value}
    </div>
  );
};

export default Button;
