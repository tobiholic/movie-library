import { useEffect, useState } from 'react';
import userService, { User } from '../services/user-service';
import { CanceledError } from '../services/api-client';

const useUsers = () => {
  //setting user, defining <shape>
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  //callback function Effect Hook to fetch data with axios
  useEffect(() => {
    setLoading(true);
    const { request, cancel } = userService.getAll<User>();
    request
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

    return () => cancel();
  }, []);

  return { users, error, loading, setUsers, setError };
};

export default useUsers;
