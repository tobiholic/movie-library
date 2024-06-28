import { ReactNode, useState } from 'react';

interface Probs {
  color: string;
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ color, children, onClose }: Probs) => {
  return (
    <>
      <div
        className={'alert alert-' + color + ' alert-dismissible fade show'}
        role='alert'
      >
        {children}
        <button
          type='button'
          className='btn-close'
          data-bs-dismiss='alert'
          aria-label='Close'
          onClick={onClose}
        ></button>
      </div>
    </>
  );
};

export default Alert;
