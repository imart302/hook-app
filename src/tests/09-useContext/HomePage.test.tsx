import { HomePage } from "../../09-useContext/HomePage"
import { render, screen } from '@testing-library/react';
import { UserProvider } from "../../09-useContext/context/UserProvider";
import { UserContext } from "../../09-useContext/context/UserContext";

describe('Tests on <HomePage>', () => {

  test('should show the component without user', () => {

    render(
      <UserContext.Provider value={{}}>
        <HomePage></HomePage>
      </UserContext.Provider>
    );


    const heading = screen.getByTestId('h1-home-id');
    expect(heading.innerHTML).toBe('Home Page');

  }); 

  test('should render with name', () => {

    render(
      <UserContext.Provider
        value={{
          user: {
            name: 'ivan',
            email: 'email',
          }
        }}
      >
        <HomePage></HomePage>
      </UserContext.Provider>
    );

    screen.debug();
    const name = screen.getByTestId('name-id');
    expect(name).toBeDefined();
    expect(name.innerHTML).toContain('ivan');

  });

})