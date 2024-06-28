import { MouseEvent, ReactNode } from 'react';

interface Probs {
  children: ReactNode;
  color?: 'primary' | 'success' | 'danger';
  onClick: () => void;
}

const ButtonAlert = ({ children, color, onClick }: Probs) => {
  return (
    <button
      className={'btn btn-' + color}
      id='liveAlertBtn'
      type='button'
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonAlert;
