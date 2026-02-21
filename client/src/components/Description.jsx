



import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Description = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center my-24 p-6 md:px-28 
      bg-gradient-to-b from-slate-950 via-slate-900 to-black 
      text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Heading Animation */}
      <motion.h1
        className="text-lg text-3xl sm:text-4xl font-bold mt-10 
        w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-4xl 
        text-center mx-auto 
        bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 
        bg-clip-text text-transparent"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Create AI images
      </motion.h1>

      {/* Subtitle Animation */}
      <motion.p
        className="mt-2 text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl 
        text-center lg:text-left"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Turn your imagination into visuals
      </motion.p>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-3 max-w-6xl mx-auto px-4">
        
        {/* Image Animation */}
        <motion.img
          src={assets.sample_img_1}
          alt="image"
          className="w-40 sm:w-56 md:w-64 lg:w-72 rounded-2xl shadow-lg shadow-cyan-500/20"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Text Content Animation */}
        <motion.div
          className="text-center lg:text-left"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold 
          bg-gradient-to-r from-purple-400 to-cyan-400 
          bg-clip-text text-transparent">
            Introducing the AI powered text to image generator
          </h2>

          <p className="mt-3 text-gray-400 text-sm sm:text-base">
            Easily bring your ideas to life with our free AI image generator.
            Whether you need stunning visuals or unique imagery.
          </p>

          <p className="mt-2 text-gray-400 text-sm sm:text-base">
            Create eye-catching images in seconds using advanced AI technology.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Description;