import mongoose from "mongoose";
export default function DBConnect(){
    try{
    const db=mongoose.connect("mongodb://localhost:27017/testhifi");
    }
    catch(error)
    {
        console.log("error in mongodb connection");
    }
}