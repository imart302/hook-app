import React, { useContext } from 'react'
import { UserContext } from './context/userContext'

export const HomePage = () => {

  const userContext = useContext(UserContext);


  return (
    <>
      <h1>Home Page  {userContext.user?.name ? <small>{userContext.user?.name}</small>: ''}</h1>
      <hr></hr>
    </>
  )
}
