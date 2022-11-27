import React, { FormEvent, useEffect, useReducer } from 'react';
import { useTodo } from './hooks/useTodo';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';


export const TodoApp = () => {
  const { state, onNewTodo, handleDeleteTodo, handleToggleTodo, todoCount, pendingTodos } = useTodo();

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state));
    return () => {};
  }, [state]);

  return (
    <>
      <h1>
        TodoApp: {todoCount}, <small>pendientes: {pendingTodos}</small>{' '}
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={state}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          ></TodoList>
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={onNewTodo}></TodoAdd>
        </div>
      </div>
    </>
  );
};
