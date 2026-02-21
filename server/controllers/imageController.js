import userModel from "../models/userModel.js";
import formData from "form-data";
import axios from "axios"


export const generateImage = async (req, res) => {
    try {
        const { id } = req.user;
        const { prompt } = req.body;

        const user = await userModel.findById(id);

        if (!user || !prompt) {
            return res.json({ success: false, message: "Missing information !" });
        }

        if (user.creditBalance === 0 || user.creditBalance < 1) {
            return res.json({ success: false, message: "No credit balance ", creditBalance: user.creditBalance });
        }

        const FormData = new formData();
        FormData.append('prompt', prompt);

        // res.data store in data 
        const { data } = await axios.post("https://clipdrop-api.co/text-to-image/v1", FormData, {

            headers: {
                //  ...FormData.getHeaders(),
                'x-api-key': process.env.CLIPDROP_API,
            },
            responseType: "arraybuffer"
        })

        const base64 = Buffer.from(data, "binary").toString("base64"); // base 64 denga 
        const src = `data:image/png;base64,${base64}`;

        // image is generated so userCreadir is useReducer

        const updatedUser = await userModel.findByIdAndUpdate(id, { creditBalance: user.creditBalance - 1 }, { new: true }); // reduce the credit

        res.json({ success: true, message: "image generated", creditBalance: updatedUser.creditBalance, generatedImage: src });


    } catch (error) {
        // console.log("Error occure in the generate image");
        res.json({ success: false, message: error.message });
    }
}