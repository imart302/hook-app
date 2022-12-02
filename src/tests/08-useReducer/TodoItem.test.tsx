import { TodoItem, ITodoItemProps } from '../../08-useReducer/TodoItem';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

describe('Tests on <TodoItem>', () => {
  const todoProps: ITodoItemProps = {
    id: 1,
    done: false,
    description: 'Test Description',
    onToggleTodo: vi.fn(),
    onDeleteTodo: vi.fn(),
  }; 

  beforeEach(() => {
    vi.resetAllMocks();
  });

  test('should render with props', () => {

    render(
      <TodoItem
        description={todoProps.description}
        id={todoProps.id}
        done={todoProps.done}
      ></TodoItem>
    );

    const descEl = screen.getByText<HTMLElement>(todoProps.description);
    expect(descEl).toBeDefined();
  });

  test('should call onToggle when toggle done', () => {

    render(
      <TodoItem
        description={todoProps.description}
        id={todoProps.id}
        done={todoProps.done}
        onToggleTodo={todoProps.onToggleTodo}
      ></TodoItem>
    );

    //screen.debug();
    const spanEl = screen.getByTestId('span-id');
    fireEvent.click(spanEl);
    expect(todoProps.onToggleTodo).toBeCalledTimes(1);
  });

  test('should call onDelete when delete task', () => {

    render(
      <TodoItem
        description={todoProps.description}
        id={todoProps.id}
        done={todoProps.done}
        onDeleteTodo={todoProps.onDeleteTodo}
      ></TodoItem>
    );

    //screen.debug();
    const buttonEl = screen.getByTestId('button-delete-id');
    fireEvent.click(buttonEl);

    expect(todoProps.onDeleteTodo).toBeCalledTimes(1);

  });
});
