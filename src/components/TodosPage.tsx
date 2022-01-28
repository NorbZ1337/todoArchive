import axios from 'axios';
import React, { useEffect, useState, FC } from 'react';
import List from '../components/List';
import Todoitem from '../components/Todoitem';
import { ITodo, IUser } from '../types/types';

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos');
      setTodos(response.data);
    } catch (e) {
      alert(e);
    }
  }
  return (
    <List items={todos} renderItem={(todo: ITodo) => <Todoitem todo={todo} key={todo.id} />} />
  );
};

export default TodosPage;
