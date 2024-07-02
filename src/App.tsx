import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

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
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>(
          'https://jsonplaceholder.typicode.com/users'
        );
        setUser(response.data);
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };
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
