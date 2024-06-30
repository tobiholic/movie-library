import React, { useState } from 'react';
import { FormEvent, useRef } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

interface FormData {
  name: string;
  age: number;
}

const Forms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  console.log(register('name'));

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Please enter your name
        </label>
        <input
          {...register('name', { required: true, minLength: 3 })}
          id='name'
          type='text'
          className='form-control'
        />
        {errors.name?.type === 'required' && (
          <p className='text-danger'>The name field is requiered.</p>
        )}
        {errors.name?.type === 'minLength' && (
          <p className='text-danger'>The name must be at least 3 characters.</p>
        )}
      </div>
      <div className='mb-3'>
        <label htmlFor='' className='form-label'>
          Age
        </label>
        <input {...register('age')} type='number' className='form-control' />
      </div>
      <button type='submit' className='btn btn-primary'>
        send it
      </button>
    </form>
  );
};

export default Forms;
