import React, { useEffect, useState } from 'react';

interface Probs {
  category: string;
}

const ProductList = ({ category }: Probs) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log('fetching products', category);
    setProducts(['Clothing', 'Household']);
  }, [category]);

  return <div>ProductList</div>;
};

export default ProductList;
