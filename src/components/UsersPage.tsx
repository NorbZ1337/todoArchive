import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import List from '../components/List';
import Useritem from '../components/Useritem';
import { ITodo, IUser } from '../types/types';

const UsersPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <List
      items={users}
      renderItem={(user: IUser) => (
        <Useritem onClick={(user) => navigate('/users/' + user.id)} user={user} key={user.id} />
      )}
    />
  );
};

export default UsersPage;
