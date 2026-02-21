


import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState("Login");
  const { setShowLogin, backendURL, setToken, setUser } = useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      if (state === "Login") {
        let { data } = await axios.post(backendURL + "/api/user/login", { email, password });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendURL + "/api/user/register", { name, email, password });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-10 backdrop-blur-sm bg-black/60 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.form
        onSubmit={submitHandler}
        className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-black 
        w-[90%] max-w-md p-8 rounded-2xl shadow-2xl space-y-5 
        border border-cyan-500/30 text-white"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <motion.img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt="cross icon"
          className="absolute top-4 right-4 w-5 h-5 cursor-pointer opacity-70 brightness-150"
          whileHover={{ rotate: 90, scale: 1.2, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        />

        <motion.div
          className="text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <h1 className="text-3xl font-bold 
          bg-gradient-to-r from-cyan-400 to-purple-500 
          bg-clip-text text-transparent">
            {state === "Login" ? "Sign In" : "Sign Up"}
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            {state === "Login"
              ? "Welcome back! Please sign in to continue"
              : "Create your account to get started"}
          </p>
        </motion.div>

        {state !== "Login" && (
          <motion.div
            className="border border-slate-700 rounded-lg px-3 py-2 
            focus-within:ring-2 focus-within:ring-cyan-500 
            bg-slate-800 flex items-center gap-2"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <img src={assets.profile_icon} width={20} alt="" className="brightness-150" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full outline-none text-sm bg-transparent text-white placeholder-gray-400"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </motion.div>
        )}

        <motion.div
          className="border border-slate-700 rounded-lg px-3 py-2 
          focus-within:ring-2 focus-within:ring-cyan-500 
          bg-slate-800 flex items-center gap-2"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.4 }}
        >
          <img src={assets.email_icon} width={20} alt="" className="brightness-150" />
          <input
            type="email"
            placeholder="Email ID"
            className="w-full outline-none text-sm bg-transparent text-white placeholder-gray-400"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </motion.div>

        <motion.div
          className="border border-slate-700 rounded-lg px-3 py-2 
          focus-within:ring-2 focus-within:ring-cyan-500 
          bg-slate-800 flex items-center gap-2"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <img src={assets.lock_icon} width={16} alt="" className="brightness-150" />
          <input
            type="password"
            placeholder="Password"
            className="w-full outline-none text-sm bg-transparent text-white placeholder-gray-400"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </motion.div>

        {state === "Login" && (
          <p className="text-sm text-cyan-400 cursor-pointer hover:underline">
            Forgot password?
          </p>
        )}

        <button
          type="submit"
          className="w-full py-2 rounded-full 
          bg-gradient-to-r from-cyan-500 to-purple-600 
          text-white font-medium 
          hover:from-cyan-400 hover:to-purple-500 
          transition duration-200 cursor-pointer shadow-lg shadow-purple-500/30"
        >
          {state === "Login" ? "Login" : "Create Account"}
        </button>

        <p className="text-center text-sm text-gray-400">
          {state === "Login" ? "Don’t have an account?" : "Already have an account?"}
          <span
            onClick={() => setState(state === "Login" ? "Signup" : "Login")}
            className="text-cyan-400 cursor-pointer hover:underline ml-1 font-semibold"
          >
            {state === "Login" ? "Sign Up" : "Login"}
          </span>
        </p>
      </motion.form>
    </motion.div>
  );
};

export default Login;