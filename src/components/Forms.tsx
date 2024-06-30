import React, { useState } from 'react';
import { FormEvent, useRef } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters.' }),
  age: z.number({ invalid_type_error: 'Age filed is required.' }).min(18),
});

//define interface with ZOD
type FormData = z.infer<typeof schema>;

// variant ONE: not needed with zod
// interface FormData {
//   name: string;
//   age: number;
// }

const Forms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  console.log(register('name'));

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Please enter your name
        </label>
        <input
          {...register('name')}
          id='name'
          type='text'
          className='form-control'
        />
        {errors.name && <p className='text-danger'>{errors.name.message}</p>}
      </div>
      <div className='mb-3'>
        <label htmlFor='' className='form-label'>
          Age
        </label>
        <input
          {...register('age', { valueAsNumber: true })}
          type='number'
          className='form-control'
        />
        {errors.age && <p className='text-danger'>{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} type='submit' className='btn btn-primary'>
        send it
      </button>
    </form>
  );
};

export default Forms;
