import React, { useState } from 'react';

const OverviewTable = () => {
  return (
    <>
      <h2>Overview</h2>
      <div className='mb-3'>
        <label htmlFor='category-overview'>Filter</label>
        <select
          id='category-overview'
          className='form-select'
          aria-label='Default select example'
        >
          <option value='1'>All Categories</option>
          <option value='2'>Groceries</option>
          <option value='3'>Utilities</option>
          <option value='4'>Entertainment</option>
        </select>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Description</th>
            <th scope='col'>Amount</th>
            <th scope='col'>Category</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <button className='btn btn-danger'>delete</button>
            </td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>
              <button className='btn btn-danger'>delete</button>
            </td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>
              <button className='btn btn-danger'>delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default OverviewTable;
