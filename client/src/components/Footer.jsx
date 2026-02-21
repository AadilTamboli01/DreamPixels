

import React from "react"
import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-black text-white">
      <div
        className="max-w-6xl mx-auto
                   px-6 py-4
                   flex items-center justify-between"
      >
        {/* Logo */}
        <img
          src={assets.logo}
          alt="logo"
          className="h-7 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
        />

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <img
            src={assets.facebook_icon}
            alt="icon"
            className="w-8 h-8 brightness-0 invert hover:scale-110 transition duration-200 drop-shadow-[0_0_6px_rgba(255,255,255,0.7)] cursor-pointer"
          />
          <img
            src={assets.twitter_icon}
            alt="icon"
            className="w-8 h-8 brightness-0 invert hover:scale-110 transition duration-200 drop-shadow-[0_0_6px_rgba(255,255,255,0.7)] cursor-pointer"
          />
          <img
            src={assets.instagram_icon}
            alt="icon"
            className="w-8 h-8 brightness-0 invert hover:scale-110 transition duration-200 drop-shadow-[0_0_6px_rgba(255,255,255,0.7)] cursor-pointer"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer