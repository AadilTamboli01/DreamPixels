

import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  let navigate = useNavigate()
  const { user, credit, logout, setShowLogin } = useContext(AppContext)

  return (
    <div className="flex items-center justify-between
                py-3 sm:py-4
                px-3 sm:px-6 lg:px-10
                bg-gradient-to-r from-slate-950 via-slate-900 to-black
                text-white border-b border-slate-800">

      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
          src={assets.logo}
          alt="logo"
          className="h-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
        />
      </Link>

      {/* Right Side */}
      {user ? (
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">

          {/* Credits */}
          <button
            onClick={() => navigate("/buy")}
            className="
          flex items-center gap-2
          bg-gradient-to-r from-cyan-500 to-purple-600
          text-white
          px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2
          rounded-full
          shadow-lg shadow-purple-500/30
          hover:shadow-cyan-500/40 hover:scale-[1.05]
          transition-all duration-200
          text-xs sm:text-sm
        "
          >
            <img className="w-4 brightness-150" src={assets.credit_star} alt="credits" />
            <span className="hidden sm:block">Credits: {credit}</span>
          </button>

          {/* Greeting */}
          <p className="hidden md:block text-sm text-gray-300">
            Hi, {user}
          </p>

          {/* Profile */}
          <div className="relative group">
            <img
              className="w-8 sm:w-9 rounded-full cursor-pointer ring-2 ring-cyan-500/40"
              src={assets.profile_icon}
              alt="profile"
            />

            {/* Logout */}
            <button
              className="
            absolute right-0 top-10
            bg-gradient-to-r from-slate-800 to-slate-700
            text-white
            px-5 py-1.5
            rounded-full
            text-xs sm:text-sm
            opacity-0 scale-95
            group-hover:opacity-100 group-hover:scale-100
            transition-all duration-200
            whitespace-nowrap
            shadow-lg shadow-cyan-500/20
          "
              onClick={logout}
            >
              Logout
            </button>
          </div>

        </div>
      ) : (
        <div className="flex items-center gap-3 sm:gap-5">

          <p
            onClick={() => navigate("/buycredit")}
            className="cursor-pointer text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition"
          >
            Pricing
          </p>

          <button
            onClick={() => {
              setShowLogin(true)
            }}
            className="
          bg-gradient-to-r from-cyan-500 to-purple-600
          px-5 sm:px-7 py-1.5 sm:py-2
          text-white
          rounded-full
          text-sm sm:text-base
          hover:from-cyan-400 hover:to-purple-500
          transition
          shadow-lg shadow-purple-500/30
        "
          >
            Login
          </button>

        </div>
      )}
    </div>

  )
}

export default Navbar