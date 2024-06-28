import { useState } from 'react';
import './ListGroup.css';
//import for styles
import styled from 'styled-components';

//styling CSS in JS, createing styled components
const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding-left: 40px;
  margin-bottom: 10px;
`;

//making components reusable
// List with colors, names etc. No need to creat a separate component, data can be passed in like in a function.
//after item is selected, something in the app.tsx must happen to keep the component reusable. Passing function as probs.

//define Data in interface
// heading: string, items: string[];

interface Probs {
  heading: string;
  items: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup({ heading, items, onSelectItem }: Probs) {
  //Passing as probs in App.tsx
  // const items = [
  //   'New York',
  //   'Berlin',
  //   'Munich',
  //   'Nuermberg',
  //   'Düsseldorf',
  //   'Vienna',
  //   'Hamburg',
  // ];

  //Managing state
  //Hook, state / data change over time
  const [selectedIndex, setSelecedIndex] = useState(-1);
  // arr[0]; // variable (selectedIndex)
  // arr[1]; // update function

  //event handler function
  /*const handleClick = (event: MouseEvent) => {
    console.log(event);
  };*/

  return (
    <>
      <h1>{heading}</h1>
      {/*Conditional Rendering*/}
      {items.length === 0 && <p>no items found.</p>}

      {/*Looping through array & styling with modules*/}
      <List>
        {items.map((item, index) => (
          <ListItem
            key={item}
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            /* event handler */
            onClick={() => {
              setSelecedIndex(index);
              onSelectItem;
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
