import React, { useContext } from 'react'
import { UserContext } from './context/userContext'

export const LoginPage = () => {

  const userContext = useContext(UserContext);

  return (
    <>
      <h1>Login Page</h1>
      <hr></hr>

      <button className='btn btn-primary' onClick={() => {
        userContext.setUser?.({
          name: 'Ivan',
          id: '1',
          email: 'asd'
        });
      }}>
        Set User
      </button>
    </>
  )
}
