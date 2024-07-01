import { useState } from 'react';
import './App.css';
import Forms from './components/Forms';
import OverviewTable from './components/OverviewTable';

function App() {
  const [expense, setExpense] = useState({
    description: '',
    amount: '',
    category: ['Groceries', 'Ultilities', 'Entertainment'],
  });

  return (
    <>
      <Forms></Forms>
      <br />
      <br />
      <OverviewTable></OverviewTable>
    </>
  );
}

export default App;
