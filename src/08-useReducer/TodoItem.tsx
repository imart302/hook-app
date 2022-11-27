import React from 'react';

export interface ITodoItemProps {
  description: string,
  id: number,
  done: boolean,
  onDeleteTodo?: (id: number) => void,
  onToggleTodo?: (id: number) => void,
}

export const TodoItem = (props: ITodoItemProps) => {

  const handleDelete = () => {
    props.onDeleteTodo?.(props.id);
  }

  return (
    <>
      <li key={props.id} className="list-group-item d-flex justify-content-between">
        <span
          className={`align-self-center ${props.done && 'text-decoration-line-through'}`}
          onClick={() => {props.onToggleTodo?.(props.id)}}
        >{props.description}</span>
        <button className="btn btn-danger" onClick={handleDelete}>Borrar</button>
      </li>
    </>
  );
};
