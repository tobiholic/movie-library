import React, { useState } from 'react';
import { FormEvent, useRef } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

const Forms = () => {
  const { register, handleSubmit } = useForm();
  console.log(register('name'));

  const onSubmit = (data: FieldValues) => console.log(data);
  //Variante ONE

  //define all inputs with null and safe it in variable
  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);
  // const person = {
  //   name: '',
  //   age: 0,
  // };

  //event handler for form, ref hook
  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   if (nameRef.current !== null) person.name = nameRef.current.value;
  //   if (ageRef.current !== null) person.age = ageRef.current.valueAsNumber;
  //   console.log(person);
  // };

  //Attribute for input form
  //ref={nameRef}
  //Ref={ageRef}

  //Variante TWO

  //Managing form with reactHook
  // const [person, setPerson] = useState({
  //   name: '',
  //   age: '',
  // });

  //Variant two, event handler onClick
  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   console.log(person);
  // };

  return (
    <form onSubmit={onSubmit}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Please enter your name
        </label>
        <input
          //Variant TWO, using controlled components
          // onChange={(event) =>
          //   setPerson({ ...person, name: event.target.value })
          // }
          // value={person.name}
          {...register('name')}
          id='name'
          type='text'
          className='form-control'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='' className='form-label'>
          Age
        </label>
        <input
          //Variant TWO, using controlled inputs
          // onChange={(event) =>
          //   setPerson({ ...person, age: parseInt(event.target.value) })
          // }
          // value={person.age}
          {...register('age')}
          type='number'
          className='form-control'
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        send it
      </button>
    </form>
  );
};

export default Forms;
