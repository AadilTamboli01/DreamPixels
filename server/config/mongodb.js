import mongoose from "mongoose";

const connectDB = async () => {
   await  mongoose.connect(`${process.env.MOGO_URI}/textify`).then((res) => {
        console.log("database connected ! ");
    }).catch(() => {
        console.log("some error occure during databse connection");
    });
}

export default connectDB;