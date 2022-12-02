import { render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../../09-useContext/MainApp';

describe('Tests on <MainApp/>' , () => {

  test('should render HomePage', () => {
    
    render(
     <MemoryRouter>
        <MainApp></MainApp>
     </MemoryRouter>
    )

    //screen.debug();

    const home = screen.getByText('Home Page');
    expect(home).toBeTruthy();

  });

  test('should render login', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
         <MainApp></MainApp>
      </MemoryRouter>
     )
 
     //screen.debug();
 
     const login = screen.getByText('Login Page');
     expect(login).toBeTruthy();
 
    });


});