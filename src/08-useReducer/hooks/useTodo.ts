import React, { useReducer } from 'react'
import { ITodoActionReducer, todoReducer } from '../todoReducer';


interface INewTodo {
  description: string;
}

const initialState: never[] = [

];

const init = () => {
  return JSON.parse(localStorage.getItem('todos') ?? '[]');
}


export const useTodo = () => {

  const [state, dispatch] = useReducer(todoReducer, initialState, init);

  const todoCount = state.length;
  const pendingTodos = state.filter( (todo: { done: boolean; }) => todo.done==false).length;

  const onNewTodo = (todo: INewTodo) => {
    
    const newTodo = {
      id: new Date().getTime(),
      description: todo.description,
      done: false
    }

    const action: ITodoActionReducer = {
      type: '[TODO] Add Todo',
      payload: [newTodo],
    }

    dispatch(action);

  }

  const handleDeleteTodo = (id: number) => {
    const action: ITodoActionReducer = {
      type: '[TODO] Remove',
      payload: {
        id
      }
    }

    dispatch(action);
  }

  const handleToggleTodo = (id: number) => {
    console.log('toggle todo');
    const action: ITodoActionReducer = {
      type: '[TODO] Toggle',
      payload: {
        id
      }
    }

    dispatch(action);
  };
  return (
    {
      state,
      onNewTodo,
      handleDeleteTodo,
      handleToggleTodo,
      todoCount,
      pendingTodos,
    }
  )
}
