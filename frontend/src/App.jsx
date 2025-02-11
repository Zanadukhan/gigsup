import { useState } from 'react'
import {  createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './pages/main-page'
import SignIn from './pages/sign-in'
import SignUp from './pages/sign-up'

const Home = () => {
  return (
    <>
    <Header />
    <Content />
    <Footer />
    </>
  )
}

const Register = () => {
  return (
    <>
    <Header />
    <SignUp />
    <Footer />
    </>
  )
  }

const Login = () => {
  return (
    <>
    <Header />
    <SignIn />
    <Footer />
    </>
  )
}

const router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route path="/" element={<Home />} />
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  </>
))

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
