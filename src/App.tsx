import { useEffect, useState } from 'react';
import axios, { CanceledError } from 'axios';

//Defining attributes for users to show
interface User {
  id: number;
  name: string;
}

function App() {
  //setting user, defining <shape>
  const [users, setUsers] = useState<User[]>([]);
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
        setUsers(res.data), setLoading(false);
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

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    axios
      .delete('https://jsonplaceholder.typicode.com/users/' + user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  return (
    <>
      <div>
        {error && <p className="text-danger">{error}</p>}
        {loading && <div className="spinner-border text-primary"></div>}
        <ul className="list-group">
          {users.map((users) => (
            <li
              key={users.id}
              className="list-group-item d-flex justify-content-between"
            >
              {users.name}
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(users)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
