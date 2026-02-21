


import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { showLogin } = useContext(AppContext)

  return (
    <div className="min-h-screen flex flex-col px-5 sm:px-10 md:px-6 lg:px-20 
                    bg-gradient-to-br from-slate-950 via-slate-900 to-black 
                    text-gray-200">
      <ToastContainer position='bottom-right'/> 
      
      <Navbar />
      {showLogin ? <Login /> : null}

      {/* MAIN CONTENT */}
      <main className="flex-grow">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/buy' element={<Buy />} />
          <Route path='/buycredit' element={<BuyCredit />} />
          <Route path='/result' element={<Result />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App