import { render, screen, fireEvent } from '@testing-library/react';
import { MultipleCustomHooks } from '../../03-examples/MultipleCustomHooks';
import { vi } from 'vitest';
import { useFetchQuote } from '../../03-examples/hooks/useFetchQuote';
import { useCounter } from '../../03-examples/hooks/useCounter';
import { useState } from 'react';

vi.mock('../../03-examples/hooks/useFetchQuote');
vi.mock('../../03-examples/hooks/useCounter');

describe('Test on <MultipleCustomHooks>', () => {
  const incrementCall = vi.fn();
  const decrementCall = vi.fn();

  beforeAll(() => {

  });

  beforeEach(() => {
    vi.resetAllMocks();
    vi.mocked(useCounter).mockImplementation(() => {
      const [count, setCount] = useState(0);

      const increment = vi.fn(() => {
        setCount((actual) => actual + 1);
        incrementCall();
      });

      const decrement = vi.fn(() => {
        setCount((actual) => actual - 1);
        decrementCall();
      });

      const reset = vi.fn(() => {
        setCount((actual) => 0);
      });

      return {
        count,
        increment,
        decrement,
        reset
      }
    });
  });

  test('should render component loading', () => {
    vi.mocked(useFetchQuote).mockReturnValue({
      data: [],
      isLoading: true,
      error: null,
    });
    render(<MultipleCustomHooks></MultipleCustomHooks>);

    const loadingLabel = screen.getByText<HTMLHeadingElement>('Loading ...');
    expect(loadingLabel).toBeDefined();
  });

  test('Should render the quote', () => {
    vi.mocked(useFetchQuote).mockReturnValue({
      data: [
        {
          author: 'Ivan',
          quote: 'Expected quote',
        },
      ],
      isLoading: false,
      error: null,
    });

    render(<MultipleCustomHooks></MultipleCustomHooks>);
    const quoteEl = screen.getByText<HTMLHeadingElement>('Expected quote');
    const authorEl = screen.getByText<HTMLElement>('Ivan');

    expect(quoteEl).toBeDefined();
    expect(authorEl).toBeDefined();

    screen.debug();
  });

  test('Should change the quote on next and increment', () => {
    
    vi.mocked(useFetchQuote)
      .mockReturnValue({
        data: [
          {
            author: 'Expected Author',
            quote: 'Expected Quote',
          },
        ],
        isLoading: false,
        error: null,
      })
      .mockReturnValueOnce({
        data: [
          {
            author: 'Ivan',
            quote: 'quote',
          },
        ],
        isLoading: false,
        error: null,
      });


    render(<MultipleCustomHooks></MultipleCustomHooks>);

    const nextButton = screen.getByText<HTMLButtonElement>('Next Quote');
    fireEvent.click(nextButton);

    const quote = screen.getByText<HTMLElement>('Expected Quote');
    const author = screen.getByText<HTMLElement>('Expected Author');
    screen.debug();
    expect(quote).toBeDefined();
    expect(author).toBeDefined();

    expect(incrementCall).toBeCalledTimes(1);

  });

  test('Should change the quote on previous', () => {
    vi.mocked(useFetchQuote)
      .mockReturnValue({
        data: [
          {
            author: 'Expected Author',
            quote: 'Expected Quote',
          },
        ],
        isLoading: false,
        error: null,
      })
      .mockReturnValueOnce({
        data: [
          {
            author: 'Ivan',
            quote: 'quote',
          },
        ],
        isLoading: false,
        error: null,
      });

    render(<MultipleCustomHooks></MultipleCustomHooks>);

    const nextButton = screen.getByText<HTMLButtonElement>('Previous Quote');
    fireEvent.click(nextButton);

    const quote = screen.getByText<HTMLElement>('Expected Quote');
    const author = screen.getByText<HTMLElement>('Expected Author');

    expect(quote).toBeDefined();
    expect(author).toBeDefined();
    expect(decrementCall).toBeCalledTimes(1);
    expect(incrementCall).toBeCalledTimes(0);
  });

  test('should show error when no quotes', () => {
    vi.mocked(useFetchQuote)
      .mockReturnValue({
        data: [],
        isLoading: false,
        error: new Error('error'),
      });
  
    render(<MultipleCustomHooks></MultipleCustomHooks>);
      
    const noquote = screen.getByText<HTMLElement>('No more quotes');
    
    expect(noquote).toBeDefined();

  });


});
