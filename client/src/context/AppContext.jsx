import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { toast } from "react-toastify"

import axios from "axios"
import { useNavigate } from 'react-router-dom';
// import { generateImage } from '../../../server/controllers/imageController';

export const AppContext = createContext();

const AppContextProvider = (props) => {
   let [user, setUser] = useState(null);
   let [showLogin, setShowLogin] = useState(false)

   let [token, setToken] = useState(localStorage.getItem('token'));
   let [credit, setCredit] = useState(false);

   const navigate = useNavigate();

   const backendURL = import.meta.env.VITE_BACKEND_URL;

   const loadCreaditsData = async () => {
      try {

         const { data } = await axios.get(backendURL + "/api/user/credits", {
            headers: {
               token: token
            }
         });


         if (data.success) {
            setCredit(data.credits);
            setUser(data.user);

         } else {
            toast.error(data.success);
         }

      } catch (error) {
         console.log("Error int the loadCreadit method ")
         toast.error(error.message)
      }
   }

   const imageGenerate = async (prompt) => {
      try {


         const { data } = await axios.post(backendURL + "/api/image/generate-image", { prompt }, { headers: {token:token} })
         if (data.success) {
            loadCreaditsData();
            return data.generatedImage;
         }
         else {
            toast.error(data.success);
            loadCreaditsData();
            if (data.creditBalance === 0) {
               navigate("buycredit")
            }
         }
      } catch (error) {
         toast.error(error.message);
      }
   }

   const logout = () => {
      localStorage.removeItem("token");
      setToken("");
      setUser(null);
   }
   useEffect(() => {
      if (token) {
         loadCreaditsData();
      }

   }, [token]);

   let value = {
      user, setUser, showLogin, setShowLogin, backendURL, token, setToken, credit, setCredit,  loadCreaditsData, logout , imageGenerate
   }
   return (
      <AppContext.Provider value={value}>
         {props.children}
      </AppContext.Provider>
   )
}

export default AppContextProvider
