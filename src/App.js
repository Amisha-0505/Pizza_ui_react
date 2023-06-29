import React from 'react'
import Todo from './components/Todo'
import Home from './components/Home'
import Tenu from './components/Tenu'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <div className='App'>
        <Navbar/>
        <Routes>
         <Route path='/'  element={<Home />} />
          <Route path="/menu" element={<Tenu/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
      </Routes> 
      <Footer/>
    </div>
  )
}

export default App

