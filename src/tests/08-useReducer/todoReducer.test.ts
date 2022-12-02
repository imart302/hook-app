import { describe , test, vi} from 'vitest';
import { ITodoActionReducer, todoReducer } from '../../08-useReducer/todoReducer';



describe('tests on todo reducer', () => {

  const initialState = [
    {
      id: 1,
      description: "desc",
      done: false
    }
  ];

  test('should return initial state', () => {

    const state = todoReducer(initialState, {
      type: '',
      payload: undefined
    });

    expect(state).toEqual(initialState);
  });

  test('should add a todo', () => {

    const newTodo = {
      id: 2,
      description: "desc2",
      done: false
    }
    const action: ITodoActionReducer = {
      type: '[TODO] Add Todo',
      payload: [newTodo],
    }

    const state = todoReducer(initialState, action);

    expect(state).toContain(newTodo);
  });

  test('should delete a todo', () => {
    const deletTodo = {
      id: 1,
    }

    const action: ITodoActionReducer = {
      type: '[TODO] Remove',
      payload: deletTodo
    }

    const state = todoReducer(initialState, action);

    expect(state.length).toBe(0);

  });

  test('should change done', () => {
    const todoDone = {
      id: 1
    };

    const action: ITodoActionReducer = {
      type: '[TODO] Toggle',
      payload: todoDone,
    }

    const state = todoReducer(initialState, action);

    const todo = state.find((todo: any) => todo.id = 1);

    expect(todo.done).toBe(true);
  });

});