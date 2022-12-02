import { UserContext } from '../../09-useContext/context/UserContext';
import { LoginPage } from '../../09-useContext/LoginPage';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';


describe('Pruebas en <LoginPage>', () => {
  test('should render component without user', () => {
    render(
      <UserContext.Provider value={{}}>
        <LoginPage></LoginPage>
      </UserContext.Provider>
    );

    screen.debug();
    const userEl = screen.getByTestId('user-test-id');

    expect(userEl.innerHTML).toBe('');
  });

  test('should call set user', () => {
    const setUser = vi.fn();

    render(
      <UserContext.Provider
        value={{
          setUser,
        }}
      >
        <LoginPage></LoginPage>
      </UserContext.Provider>
    );

    const button = screen.getByRole<HTMLButtonElement>('button');
    fireEvent.click(button);
    
    expect(setUser).toBeCalledTimes(1);
    expect(setUser).toHaveBeenCalledWith({
      name: 'Ivan',
      id: '1',
      email: 'asd'
    });

  });
});
