import React from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { AboutPage } from './AboutPage'
import { UserProvider } from './context/UserProvider'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { Navbar } from './Navbar'

export const MainApp = () => {
  return (
    <UserProvider>
      <h1>Main App</h1>
      <hr></hr>


      <Navbar></Navbar>
      <hr></hr>

      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/about' element={<AboutPage></AboutPage>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>

        <Route path='/*' element={<Navigate to={"/about"}></Navigate>}></Route>
      </Routes>
    </UserProvider>
  )
}
