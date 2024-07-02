import { useEffect, useState } from 'react';
import axios from 'axios';

//Defining attributes for users to show
interface User {
  id: number;
  name: string;
}

function App() {
  //setting user, defining <shape>
  const [user, setUser] = useState<User[]>([]);

  const [error, setError] = useState('');

  //callback function Effect Hook to fetch data with axios
  useEffect(() => {
    const users = axios
      .get<User[]>('https://jsonplaceholder.typicode.com/xusers')
      .then((res) => setUser(res.data))
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <>
      <div>
        {error && <p className="text-danger">{error}</p>}
        <ul>
          {user.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
