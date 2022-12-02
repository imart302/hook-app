import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const HomePage = () => {

  const userContext = useContext(UserContext);


  return (
    <>
      <h1 data-testid="h1-home-id">Home Page{userContext.user?.name ? <small data-testid="name-id">{' '+userContext.user?.name}</small>: ''}</h1>
      <hr></hr>
    </>
  )
}
