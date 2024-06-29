import React from 'react';

interface Probs {
  cartItemsCount: number;
}

const Navbar = ({ cartItemsCount }: Probs) => {
  return <div>Navbar | Items: {cartItemsCount}</div>;
};

export default Navbar;
