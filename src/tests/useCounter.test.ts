import { useCounter } from '../01-useState/hooks/useCounter';
import { renderHook, act } from '@testing-library/react';



describe('Test on useCounter', () => {

  test('should return default value', () => {

    const initialValue = 0;
    const { result } = renderHook(() => useCounter(initialValue));
    
    expect(result.current.count).toBe(initialValue);

  });

  test('should increment by two', () => {
    const initialValue = 1;
    const nextValue = 3;

    const { result } = renderHook(() => useCounter(initialValue));
    act(() => {
      result.current.increment();
      result.current.increment();
    });

    expect(result.current.count).toBe(nextValue);

  });


  test('should decrement by two', () => {
    const initialValue = 2;
    const nextValue = 0;

    const { result } = renderHook(() => useCounter(initialValue));

    act(() => {
      result.current.decrement();
      result.current.decrement();
    });

    expect(result.current.count).toBe(nextValue);
  });

  test('should reset to initial', () => {
    const initialValue = 0;
    
    const { result } = renderHook(() => useCounter(initialValue));

    act(() => {
      result.current.increment();
      result.current.increment();
      result.current.decrement();
      result.current.decrement();
    });

    expect(result.current.count).toBe(initialValue);

  });

    
}); 