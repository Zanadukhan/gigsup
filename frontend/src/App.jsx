import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/main-page'
import SignIn from './components/sign-in'
import SignUp from './components/sign-up'

function App() {
  return(
  <>
  <Header />
  {/* <Content /> */}
  {/* <SignIn /> */}
  <SignUp />
  <Footer />
  </>
  )
}

export default App
