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

// Simple Dashboard (sorry idk how react works :((( ))))
const Dashboard = () => {
  const [email, setEmail] = useState(localStorage.getItem("userEmail"));

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="mt-4 text-lg text-gray-600">Hello, {email ? email : "User"}!</p>
      </div>
    </div>
  );
};


const router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route path="/" element={<Home />} />
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  <Route path="/dashboard" element={<Dashboard />} /> {/* test dashboard route */}
  </>
))

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
