import React from 'react';
interface Probs {
  children: string;
  color?: 'primary' | 'success' | 'danger';
  onClick: () => void;
}

const Button = ({ children, onClick, color = 'success' }: Probs) => {
  return (
    <button
      className={'btn btn-' + color}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
