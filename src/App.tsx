import { useState } from 'react';
import './App.css';
import produce from 'immer';

//Updating arrays
function App() {
  //Updating array of objects
  const [bugs, setBugs] = useState([
    { id: 1, title: 'Bug 1', fixed: false },
    { id: 2, title: 'Bug 2', fixed: false },
  ]);

  const handleClickBug = () => {
    //setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  const [tags, setTags] = useState(['happy', 'cheerful']);
  const handleClick = () => {
    // add
    setTags([...tags, 'exciting']);

    // remove
    setTags(tags.filter((tag) => tag !== 'happy'));

    // update
    setTags(tags.map((tag) => (tag === 'happy' ? 'happiness' : tag)));
  };

  return (
    <div>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? 'Fixed' : 'New'}
        </p>
      ))}
      <button onClick={handleClickBug}>Add array</button>
    </div>
  );
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
