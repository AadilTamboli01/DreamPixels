import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt, { hash } from "bcrypt"


export const registerUser = async (req, res) => {
    try {
        let { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.json({ success: false, message: "Missing details" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassWord = await bcrypt.hash(password, salt);

        const userData = {
            name, email, password: hashPassWord
        }

        let newUser = new userModel(userData);
        newUser.save().then((res) => {
            // console.log("successFully user saved in the data base ")
        }).catch((err) => {
            // console.log("Some error occure during saving the user in the database ! ");
        })

        // generate token 
        const token = jwt.sign({ id: newUser._id }, process.env.SECRET, { expiresIn: "1h" });

        res.json({ success: true, token, user: newUser.name });


    } catch (error) {
        console.log("register User handler");
        console.log(error)
        res.json({ success: false, message: error.message });
    }


}

export const loginUser = async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User does not exist" });

        }

        let isMatch = await bcrypt.compare(password, user.password); // comapring the password 

        if (isMatch) {
            // generate token again 
            let token = jwt.sign({ id: user._id }, process.env.SECRET, { expiresIn: "1h" });
            res.json({ success: true, token, user: user.name });
            // console.log("user login successfully ");
        } else {
            return res.json({ success: false, message: "wrong password" });

        }

    } catch (error) {
        res.json({ success: false, message: error.message })
    }


}

export const userCredit = async (req, res) => {

    try {
        const { id } = req.user;
         console.log("enter in userCredit")
        const user = await userModel.findById(id);

        res.json({ success: true, credits: user.creditBalance, user: user.name });

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })
    }



}
