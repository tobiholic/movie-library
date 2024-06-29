import React from 'react';

const Forms = () => {
  return (
    <form>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Please enter your name
        </label>
        <input id='name' type='text' className='form-control' />
      </div>
      <div className='mb-3'>
        <label htmlFor='' className='form-label'>
          Age
        </label>
        <input type='number' className='form-control' />
      </div>
      <button type='submit' className='btn btn-primary'>
        send it
      </button>
    </form>
  );
};

export default Forms;
