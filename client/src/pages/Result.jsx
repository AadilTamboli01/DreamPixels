



import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

  const { imageGenerate } = useContext(AppContext);
  
  const onsubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (input) {
      const newImage = await imageGenerate(input);
      if (newImage) {
        setIsImageLoaded(true);
        setImage(newImage);
      }
    }
    setLoading(false);
  }

  const generateAnother = () => {
    setInput("");
    setIsImageLoaded(false);
  }

  return (
    <form
      className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#111827] to-[#1f2937]"
      onSubmit={onsubmitHandler}
    >
      <div className="w-full max-w-md flex flex-col items-center gap-6">

        {/* Image + Progress */}
        <div className="flex flex-col items-center gap-3">
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-2xl border border-purple-500/20"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={image}
              alt="sample"
              className="w-64 sm:w-72 object-cover rounded-2xl"
            />

            {/* Progress Bar */}
            {loading && (
              <motion.span
                className="absolute bottom-0 left-0 h-1 bg-purple-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, ease: 'linear' }}
              />
            )}
          </motion.div>

          {loading && (
            <p className="text-sm text-gray-300">Generating image...</p>
          )}
        </div>

        {/* Input + Generate Button */}
        {!isImageLoaded ? (
          <motion.div
            className="w-full flex flex-col sm:flex-row items-stretch gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Describe what you want to generate..."
              className="flex-1 px-4 py-3 text-sm sm:text-base text-white placeholder-gray-400 bg-white/10 border border-purple-500/40 rounded-xl outline-none focus:ring-2 focus:ring-purple-400/50 backdrop-blur-sm"
            />

            <button
              type="submit"
              className="px-5 py-3 rounded-xl text-white font-medium bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:opacity-90 transition-all duration-300 shadow-lg shadow-purple-500/30 whitespace-nowrap"
            >
              Generate ✨
            </button>
          </motion.div>
        ) : (
          <motion.div
            className="w-full flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => generateAnother()}
              type="button"
              className="flex-1 py-3 rounded-xl font-medium text-purple-300 border border-purple-500 hover:bg-purple-900/20 transition-all backdrop-blur-sm"
            >
              Generate Another
            </button>

            <a
              href={image}
              download
              className="flex-1 py-3 text-center rounded-xl font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 transition-all shadow-lg shadow-blue-500/20"
            >
              Download
            </a>
          </motion.div>
        )}
      </div>
    </form>
  );
};

export default Result;