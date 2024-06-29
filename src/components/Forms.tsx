import React from 'react';
import { FormEvent, useRef } from 'react';

const Forms = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = {
    name: '',
    age: 0,
  };

  //event handler for form
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) person.name = nameRef.current.value;
    if (ageRef.current !== null) person.age = ageRef.current.valueAsNumber;
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Please enter your name
        </label>
        <input ref={nameRef} id='name' type='text' className='form-control' />
      </div>
      <div className='mb-3'>
        <label htmlFor='' className='form-label'>
          Age
        </label>
        <input ref={ageRef} type='number' className='form-control' />
      </div>
      <button type='submit' className='btn btn-primary'>
        send it
      </button>
    </form>
  );
};

export default Forms;
