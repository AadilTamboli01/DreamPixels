



import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";

const GenerateButton = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onclickHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center text-center my-16 px-4 
      bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white py-16 rounded-2xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Heading Animation */}
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl font-bold 
        bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 
        bg-clip-text text-transparent"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        See the magic. Try it now
      </motion.h1>

      {/* Button Animation */}
      <motion.button
        onClick={onclickHandler}
        className="mt-6 flex items-center gap-2 sm:gap-3
                   px-6 sm:px-7 py-3
                   rounded-full
                   bg-gradient-to-r from-cyan-500 to-purple-600
                   hover:from-cyan-400 hover:to-purple-500
                   text-white text-sm sm:text-base md:text-lg font-medium
                   shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-cyan-500/40
                   transition-all duration-300"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 300 }}
        whileHover={{ scale: 1.05 }}
      >
        Generate images
        <img src={assets.star_group} alt="stars" className="h-5 sm:h-6" />
      </motion.button>
    </motion.div>
  );
};

export default GenerateButton;