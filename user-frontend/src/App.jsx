import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home/Home.jsx'
import Quotes from './screens/Quotes/Quotes.jsx'
import Plans from './screens/Plans/Plans.jsx'
import Contact from './screens/Contact/Contact.jsx'
import {ToastContainer} from 'react-toastify'

const App = () => {
  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quotes />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
