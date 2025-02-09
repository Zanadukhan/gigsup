import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/main-page'
import SignIn from './components/sign-in'
import SignUp from './components/sign-up'

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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
