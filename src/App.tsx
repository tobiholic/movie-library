import { useState } from 'react';
import './App.css';
import { Immer } from 'immer';

function App() {
  //Exercise 1: updating object with useState
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: 'John',
      age: 30,
    },
  });
  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: 'Tobias' } });
  };

  //Exercise 2
  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom'],
  });

  const handleClick2 = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, 'cheese'] });
  };

  //Exercise 3
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: 'Product 1', quantity: 1 },
      { id: 2, title: 'Product 2', quantity: 1 },
    ],
  });

  const handleClick3 = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  //function with immer

  // const updateCart = (cart, setCart) => {
  //   setCart(
  //     produce(cart, (draftCart) => {
  //       const itemToUpdate = draftCart.items.find((item) => item.id === 1);
  //       if (itemToUpdate) {
  //         itemToUpdate.quantity += 1;
  //       }
  //     })
  //   );
  // };
  return <div></div>;
}

export default App;

//Notes
// const [tags, setTags] = useState(['happy', 'cheerful']);
// const handleClick = () => {
//   // add
//   setTags([...tags, 'exciting']);

//   // remove
//   setTags(tags.filter((tag) => tag !== 'happy'));

//   // update
//   setTags(tags.map((tag) => (tag === 'happy' ? 'happiness' : tag)));
// };
