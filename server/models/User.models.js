import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        min:[6,"username should contain atleast 6 characters"],
        max:[25,"username should not exceed 25 characters"],
    },
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        min:[8,"Password should contain atleast 8 characters"],
        max:[40,"password should not exceed 40 characters"]
    },
    avatar:{
        type:String
    },
},{timestamps:true})

export const User = mongoose.model("user",userSchema)

