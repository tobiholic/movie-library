import React from 'react';

interface Probs {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: Probs) => {
  return <button>{children}</button>;
};

export default Button;
