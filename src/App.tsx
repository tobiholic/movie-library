import { useEffect, useState } from 'react';
import axios, { CanceledError } from 'axios';

//Defining attributes for users to show
interface User {
  id: number;
  name: string;
  username?: string;
  email?: string;
  website?: string;
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

  //delete data
  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    axios.delete('https://jsonplaceholder.typicode.com/users/' + user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  //add data
  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: 'Tobias Schmid' };
    setUsers([newUser, ...users]);

    axios
      .post('https://jsonplaceholder.typicode.com/users', newUser)
      .then(({ data: savedUser }) => {
        setUsers([savedUser, ...users]);
      })
      .catch((response) => {
        setError(response.message);
        setUsers(originalUsers);
      });
  };

  //update data
  const updateUser = (user: User) => {
    const defaultUsers = [...users];
    const updatedUser = { ...user, name: user.name + '!' };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    axios
      .patch('https://jsonplaceholder.typicode.com/users/' + user.id, updatedUser)
      .catch((err) => {
        setError(err.message);
        setUsers(defaultUsers);
      });
  };

  return (
    <>
      <div>
        {error && <p className="text-danger">{error}</p>}
        {loading && <div className="spinner-border text-success"></div>}
        {!loading && (
          <button className="btn btn-primary mb-4" onClick={addUser}>
            Add user
          </button>
        )}

        <ul className="list-group">
          {users.map((users) => (
            <li key={users.id} className="list-group-item d-flex justify-content-between">
              {users.name} / {users.username} / {users.email} / {users.website}
              <div>
                <button
                  className="btn btn-outline-success mx-1"
                  onClick={() => updateUser(users)}
                >
                  Update
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteUser(users)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
