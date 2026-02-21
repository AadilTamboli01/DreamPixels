




import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { AppContext } from '../context/AppContext'
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext)
  const navigate = useNavigate()
  const onclickHandler = () => {
    if (user) {
      navigate("/result");
      
    }else{
      setShowLogin(true)
    }

  }
  return (
    <motion.div
      className="flex flex-col justify-center my-24 items-center text-center relative 
      bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white py-20 rounded-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Floating Badge */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
        className="flex items-center gap-2 px-4 py-1 rounded-full 
        bg-slate-800 border border-cyan-500/40 shadow-lg shadow-cyan-500/20"
      >
        <p className="text-sm font-medium text-cyan-300">
          Best text to image generation
        </p>
        <motion.img
          src={assets.star_icon}
          alt=""
          className="brightness-150"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        />
      </motion.div>

      {/* Heading Cinematic Entry */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
        className="text-4xl sm:text-6xl font-extrabold mt-12 max-w-4xl leading-tight"
      >
        Turn text to{" "}
        <motion.span
          className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 
          bg-clip-text text-transparent inline-block"
          animate={{
            textShadow: [
              "0px 0px 0px rgba(59,130,246,0.5)",
              "0px 0px 25px rgba(59,130,246,0.9)",
              "0px 0px 0px rgba(59,130,246,0.5)",
            ],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          image
        </motion.span>
        , in seconds
      </motion.h1>

      {/* Paragraph Smooth Fade */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-6 text-gray-400 max-w-2xl text-lg"
      >
        Unleash your creativity with AI, turn your imagination into visual art
        in seconds, just type and watch the magic happen.
      </motion.p>

      {/* Glowing Button */}
      <motion.button
        onClick={onclickHandler}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, type: "spring", stiffness: 120 }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 30px rgba(139,92,246,0.7)",
        }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 rounded-full 
        bg-gradient-to-r from-cyan-500 to-purple-600 
        text-white flex gap-3 items-center mt-8 cursor-pointer 
        shadow-lg shadow-purple-500/30"
      >
        Generate images
        <motion.img
          className="w-6 brightness-125"
          src={assets.star_group}
          alt="icon"
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.button>

      {/* Staggered Image Explosion Effect */}
      <motion.div
        className="flex gap-3 mt-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 1.2,
            },
          },
        }}
      >
        {Array(6)
          .fill("")
          .map((_, index) => (
            <motion.img
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.5, y: 40 },
                visible: { opacity: 1, scale: 1, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 120 }}
              whileHover={{ scale: 1.15, rotate: 3 }}
              className="w-12 sm:w-16 md:w-20 lg:w-24 cursor-pointer 
              rounded-xl shadow-lg shadow-cyan-500/20"
              src={
                index % 2 === 0
                  ? assets.sample_img_1
                  : assets.sample_img_2
              }
              alt="sample_img"
            />
          ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-6 text-gray-500"
      >
        Generated images from imagify
      </motion.p>
    </motion.div>
  );
};

export default Header;