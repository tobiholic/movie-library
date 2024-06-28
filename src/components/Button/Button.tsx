import React, { ReactNode } from 'react';
import style from './Button.module.css';

interface Probs {
  children: ReactNode;
}

const Button = ({ children }: Probs) => {
  return <button className={style.button}>{children}</button>;
};

export default Button;
