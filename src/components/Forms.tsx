import React, { FormEvent, useRef, useState } from 'react';

interface Probs {}

const Forms = () => {
  const [expense, setExpense] = useState({
    description: '',
    amount: '',
    category: ['Groceries', 'Ultilities', 'Entertainment'],
  });
  const expenses = {};

  const descripRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (
      descripRef.current !== null &&
      amountRef.current !== null &&
      categoryRef.current !== null
    ) {
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='description'>Description</label>
          <input
            ref={descripRef}
            type='text'
            id='description'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Amount</label>
          <input
            ref={amountRef}
            type='number'
            id='amount'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='category'>Category</label>
          <select
            ref={categoryRef}
            id='category'
            className='form-select'
            aria-label='Default select example'
          >
            <option value='Choose your Category'>Choose your Category</option>
            <option value='1'>Groceries</option>
            <option value='2'>Utilities</option>
            <option value='3'>Entertainment</option>
          </select>
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </>
  );
};

export default Forms;
