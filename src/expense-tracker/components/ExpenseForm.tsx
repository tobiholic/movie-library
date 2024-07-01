import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import categories from '../categories';

//validaiton with ZOD
const schema = z.object({
  description: z
    .string()
    .min(3, { message: 'Description should be at least 3 characters.' })
    .max(50),
  amount: z
    .number({ invalid_type_error: 'Amount is requiered.' })
    .min(0.01)
    .max(1000_0000),
  category: z.enum(categories, {
    errorMap: () => ({ message: 'Category is requiered.' }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

interface Probs {
  onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ onSubmit }: Probs) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data), reset();
      })}
      className="mb-5"
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register('description')}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="form-label">
          € Amount
        </label>
        <input
          {...register('amount', { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="form-label" htmlFor="category">
          Category
        </label>
        <select {...register('category')} className="form-select" id="category">
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button className="btn btn-primary">submit</button>
    </form>
  );
};

export default ExpenseForm;
