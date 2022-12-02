import { renderHook, act } from '@testing-library/react';
import React, {ChangeEvent} from 'react';
import { useForm } from '../08-useReducer/hooks/useForm';


describe('Test on useForm', () => {

  const initialForm = {
    fields: [
      {
        name: "username",
        value: "name",
      },
      {
        name: "email",
        value: "email",
      }
    ],
  }

  test('should return default value', () => {
    const { result } = renderHook(() => useForm(initialForm) );

    expect(result.current.formFields).toEqual(initialForm.fields);
  });


  test('should change username and email', () => {
    const { result } = renderHook(() => useForm(initialForm) );

    const expected = [
      {
        name: "username",
        value: "ivan",
      },
      {
        name: "email",
        value: "ivan@email.com",
      }
    ]
    
    act(() => {
      const changeEvent = {
        target: {
          name: 'username',
          value: 'ivan',
        }
      } as ChangeEvent<HTMLInputElement>;
      result.current.onInputChange(changeEvent);

      const changeEvent2 = {
        target: {
          name: 'email',
          value: 'ivan@email.com',
        }
      } as ChangeEvent<HTMLInputElement>;
      result.current.onInputChange(changeEvent2);
    });
    expect(result.current.formFields).toEqual(expected);
  });


});