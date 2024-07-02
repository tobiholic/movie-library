import { useState } from 'react';
import ProductList from './components/ProductList';

function App() {
  const [category, setCategory] = useState('');
  return (
    <>
      <select
        className="form-select mb-4"
        onChange={(event) => {
          setCategory(event.target.value);
        }}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <div>
        <ProductList category={category} />
      </div>
    </>
  );
}

export default App;
