import { useEffect, useState } from 'react';
import axios, { CanceledError } from 'axios';

//Defining attributes for users to show
interface User {
  id: number;
  name: string;
}

function App() {
  //setting user, defining <shape>
  const [user, setUser] = useState<User[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  //callback function Effect Hook to fetch data with axios
  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users', {
        signal: controller.signal,
      })
      .then((res) => {
        setUser(res.data), setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        {
          setError(err.message), setLoading(false);
        }
      });
    //not working with strict mode, using method 1, calling twice
    // .finally(() => {
    //   setLoading(false);
    // });

    return () => controller.abort();
  }, []);

  const addUser = () => {
    const originalUsers = [...user];
    const newUser = { id: 0, name: 'Tobias Schmid' };
    setUser([newUser, ...user]);

    axios
      .post('https://jsonplaceholder.typicode.com/xusers', newUser)
      .then(({ data: savedUser }) => {
        setUser([savedUser, ...user]);
      })
      .catch((response) => {
        setError(response.message);
        setUser(originalUsers);
      });
  };

  return (
    <>
      <div>
        <button className="btn btn-primary mb-4" onClick={addUser}>
          Add User
        </button>
        {error && <p className="text-danger">{error}</p>}
        {loading && <div className="spinner-border text-primary"></div>}
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
