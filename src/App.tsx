import { useState } from 'react';
import './App.css';

//Updating arrays
function App() {
  const [tags, setTags] = useState(['happy', 'cheerful']);

  const handleClick = () => {
    // add
    setTags([...tags, 'exciting']);

    // remove
    setTags(tag.filter((tag) => tag !== 'happy'));

    // update
    setTags(tags.map((tag) => (tag === 'happy' ? 'happiness' : tag)));
  };

  return <button onClick={handleClick}>Add array</button>;
}

//updating nested objects
// function App() {
//   const [customer, setCustomer] = useState({
//     name: 'John',
//     address: {
//       city: 'San Francisco',
//       zipCode: 9411,
//     },
//   });

//   const handleClick = () => {
//     setCustomer({
//       ...customer,
//       address: { ...customer.address, zipCode: 94002 },
//     });
//   };

//   return (
//     <>
//       <div>
//         <button onClick={handleClick}>udpate zip</button>
//         {customer.address.zipCode}
//       </div>
//     </>
//   );
// }

//updateding objects
// function App() {
//   const [drink, setDrink] = useState({
//     title: 'Americano',
//     price: 5,
//   });

//   //updating objects
//   const handleClick = () => {
//     const newDrink = {
//       //if more proberties, use spread ... operator. Copies all the proberties
//       ...drink,
//       price: 6,
//     };
//     setDrink(newDrink);

//     //in this example, new object not necassary. Also
//     //setDrink({...drink, price: 6})
//   };

//   return (
//     <>
//       <div>
//         {drink.price}
//         <br />
//         <br />
//         <button onClick={handleClick}>udpate price</button>
//       </div>
//     </>
//   );
// }
export default App;
