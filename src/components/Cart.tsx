import React from 'react';

interface Probs {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: Probs) => {
  return (
    <>
      <div>
        <strong>Cart</strong>
      </div>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
    </>
  );
};

export default Cart;
