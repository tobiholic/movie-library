import './App.css';
import ListGroup from './components/ListGroup/ListGroup';
import Alert from './components/Alert';
import ButtonAlert from './components/ButtonAlert';
import { useState } from 'react';

const items = [
  'New York',
  'Berlin',
  'Munich',
  'Nuermberg',
  'Düsseldorf',
  'Vienna',
  'Hamburg',
];

const handleSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  //hook for state management of the alert. Only show when true.
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      <div>
        <ListGroup
          heading='List Group'
          items={items}
          onSelectItem={handleSelectItem}
        ></ListGroup>
        <br />
        {alertVisible && (
          <Alert
            color='success'
            onClose={() => setAlertVisibility(false)}
          >
            <h1>Yes!</h1>
            <hr />
            <h3>You are getting there, keep going!</h3>
            <p>
              Everyone started small. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Architecto ea quibusdam eaque asperiores ipsum
              odit sit enim corporis est tempora voluptatem aperiam repudiandae
              quas molestiae doloribus, ducimus beatae explicabo? Suscipit.
            </p>
          </Alert>
        )}
        <ButtonAlert
          color='primary'
          onClick={() => {
            setAlertVisibility(true);
          }}
        >
          <span>See how good you are?</span>
        </ButtonAlert>
      </div>
    </>
  );
}

export default App;
