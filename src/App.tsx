import { useState } from 'react';
import './App.css';

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

  const handleClick2 = () => {};

  return <div></div>;
}

export default App;
