import userService, { User } from './services/user-service';
import useUsers from './hooks/useUsers';

function App() {
  const { users, error, loading, setUsers, setError } = useUsers();

  //delete data
  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  //add data
  const addUser = () => {
    const originalUsers = [...users];
    const newUser = {
      id: 0,
      name: 'Tobias Schmid',
      email: 'tosch93@hotmail.de',
      username: 'tobiholic',
      website: 'tobischmid.com',
    };
    setUsers([newUser, ...users]);

    userService
      .add(newUser)
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

    userService.update(updatedUser).catch((err) => {
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
