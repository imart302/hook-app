import React from 'react';
import { ITodoItemProps, TodoItem } from './TodoItem';

export interface ITodoListProps {
  todos: ITodoItemProps[];
  onDeleteTodo?: (id: number) => void;
  onToggleTodo?: (id: number) => void;
}

export const TodoList = (props: ITodoListProps) => {
  const handleDeleteTodo = (id: number) => {
    props.onDeleteTodo?.(id);
  };

  const handleToggleTodo = (id: number) => {
    props.onToggleTodo?.(id);
  };

  return (
    <>
      <ul className="list-group">
        {props.todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              description={todo.description}
              id={todo.id}
              done={todo.done}
              onDeleteTodo={handleDeleteTodo}
              onToggleTodo={handleToggleTodo}
            ></TodoItem>
          );
        })}
      </ul>
    </>
  );
};
