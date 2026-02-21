

import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";

const Testimonial = () => {
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center my-24 p-6 md:px-28 
      bg-gradient-to-b from-slate-950 via-slate-900 to-black 
      text-white rounded-2xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
      {/* Heading Animation */}
      <motion.h1
        className="text-lg text-3xl sm:text-4xl font-bold mt-10 mb-5 
        w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-4xl 
        text-center mx-auto 
        bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 
        bg-clip-text text-transparent"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Customer testimonials
      </motion.h1>

      <motion.p
        className="mt-2 text-gray-400 mb-10 text-sm sm:text-base md:text-lg lg:text-xl text-center lg:text-left"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Turn your imagination into visuals
      </motion.p>

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-slate-800 p-6 rounded-2xl 
            shadow-lg shadow-cyan-500/10 
            border border-slate-700
            flex flex-col items-center text-center 
            hover:shadow-cyan-500/30 hover:scale-[1.05] 
            transition-all duration-300 cursor-pointer"
            variants={cardVariants}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Avatar */}
            <img
              src={testimonial.image}
              alt="image"
              className="w-14 h-14 rounded-full object-cover mb-3 ring-2 ring-cyan-500/40"
            />

            {/* Name */}
            <h2 className="text-base sm:text-lg font-semibold text-white">
              {testimonial.name}
            </h2>

            {/* Role */}
            <p className="text-sm sm:text-base text-gray-400">
              {testimonial.role}
            </p>

            {/* Stars */}
            <div className="flex gap-1 mt-3">
              {Array(testimonial.stars)
                .fill(0)
                .map((_, index) => (
                  <img
                    key={index}
                    src={assets.rating_star}
                    alt="star"
                    className="w-4 h-4 brightness-125"
                  />
                ))}
            </div>

            <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed max-w-xs sm:max-w-sm md:max-w-md">
              {testimonial.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Testimonial;