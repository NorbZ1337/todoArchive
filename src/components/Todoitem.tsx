import React, { FC } from 'react';
import { ITodo, IUser } from '../types/types';

interface TodoItemProps {
  todo: ITodo;
}
const Todoitem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div>
      <input type="checkbox" checked={todo.completed} />
      {todo.id}. {todo.title}
    </div>
  );
};

export default Todoitem;
