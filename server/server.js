import express from "express"

import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/mongodb.js"
import userRouter from "./routes/userRouter.js"
import imageRouter from "./routes/imageRoutes.js"

dotenv.config()
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const PORT = process.env.PORT || 5000;

app.use(cors()); // adding cors 
connectDB(); // connection with mongodb 

app.use("/api/user", userRouter); // userRouter ko dedo  mounting a route 
app.use("/api/image",imageRouter); 
app.get("/", (req, res) => {
    res.send("reqeust on root ");
})
 
app.listen(PORT, () => {
    console.log("listening");
})