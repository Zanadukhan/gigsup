import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/main-page'
import SignUp from './components/sign-up'

function App() {
  return(
  <>
  <Header />
  {/* <Content /> */}
  <SignUp />
  <Footer />
  </>
  )
}

export default App
