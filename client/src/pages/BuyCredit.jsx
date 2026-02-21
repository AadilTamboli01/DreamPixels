

import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'

const BuyCredit = () => {
  const { user } = useContext(AppContext)

  return (
    <div className="mt-8 min-h-[70vh] flex flex-col items-center justify-center gap-10 px-4 bg-[#111827] text-white relative">

      {/* Header */}
      <motion.div
        className="text-center space-y-3"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <button className="px-4 py-1 rounded-full bg-purple-700/20 text-purple-400 text-sm font-medium">
          OUR PLANS
        </button>
        <h2 className="text-3xl font-semibold text-white">
          Choose the plan
        </h2>
      </motion.div>

      {/* Pricing Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {plans.map((item, index) => (
          <motion.div
            key={index}
            className="w-72 bg-[#1f2937] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center gap-4 cursor-pointer hover:shadow-2xl relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img src={assets.instagram_icon} alt="icon" className="w-12 h-12" />
            <p className="text-purple-400 text-sm font-medium">{item.id}</p>

            <div className="flex items-end gap-1">
              <h1 className="text-4xl font-bold text-white">${item.price}</h1>
              <span className="text-gray-400 text-sm">/{item.credits} credits</span>
            </div>

            <p className="text-gray-400 text-sm">{item.desc}</p>

            <button className="mt-4 w-full py-2 rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-medium hover:opacity-90 transition">
              {user ? "Purchase" : "Get Started"}
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Demo Notice Banner */}
     <motion.div
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
  className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-red-600/90 text-white text-center py-3 px-6 rounded-2xl shadow-2xl backdrop-blur-sm font-semibold max-w-md z-50"
>
  ⚠️ Demo Plan – No real charges
</motion.div>
    </div>
  )
}

export default BuyCredit