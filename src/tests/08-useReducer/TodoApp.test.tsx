import { vi, describe, expect } from 'vitest';
import { useTodo } from '../../08-useReducer/hooks/useTodo';
import { ITodoAddProps, TodoAdd } from '../../08-useReducer/TodoAdd';
import { TodoList } from '../../08-useReducer/TodoList';
import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../08-useReducer/TodoApp';

const todos = [
  {
    id: 1,
    description: 'Desc1',
    done: false,
  },
  {
    id: 2,
    description: 'Desc2',
    done: false,
  }
]

vi.mock('../../08-useReducer/TodoAdd', () => {
  return {
    TodoAdd: vi.fn(() => {
      return (<div>TodoAddMock</div>);
    }),
  }
});

vi.mock('../../08-useReducer/TodoList', () => {
  return {
    TodoList: vi.fn(() => {
      return (<div>TodoListMock</div>);
    }),
  }
});

vi.mock('../../08-useReducer/hooks/useTodo', () => {
  return {
    useTodo: vi.fn(() => {

    }),
  }
});

describe('Test on Todo App', () => {

  const useTodoMocked = {
    state: todos,
    onNewTodo: vi.fn(),
    handleDeleteTodo: vi.fn(),
    handleToggleTodo: vi.fn(),
    todoCount: todos.length,
    pendingTodos: todos.length,
  }

  const TodoAddMockProps : ITodoAddProps = {
    onNewTodo: vi.fn(),
  }
  const TodoAddMock = vi.fn((TodoAddMockProps) => {
    return (<></>)
  })

  beforeAll(() => {
    vi.mocked(useTodo).mockReturnValue(useTodoMocked);
  });

  beforeEach(() => {

  });

  test('Should match snapshot', () => {
   
    const { container } = render(<TodoApp></TodoApp>);
    screen.debug();

    const countEl = screen.getByTestId('heding-count-id');

    // console.log(countEl.innerHTML);

    expect(container).toMatchSnapshot();
  });

  test('Should have 2  task and 2 pending', () => {

  });

});