import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

//Example e-commerce store. Navbar(totalShopping) and component card need to communicate. If the user adds an item, the number of total items in the navbar has to change.
//Solution: use stateHook and lift it to the closest parent. App > Navbar, Cart

function App() {
  const [cartItems, setCartItems] = useState([
    'Product1',
    'Product2',
    'Product3',
  ]);

  return (
    <div>
      <Navbar cartItemsCount={cartItems.length}></Navbar>
      <Cart
        cartItems={cartItems}
        onClear={() => setCartItems([])}
      ></Cart>
    </div>
  );
}

export default App;
