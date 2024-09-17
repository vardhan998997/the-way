import mongoose from "mongoose";
const Schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
},{timestamps:true})
const model=mongoose.model("Degree",Schema)
export default model