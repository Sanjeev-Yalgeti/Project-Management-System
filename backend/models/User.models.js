import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"

const userSchema= new mongoose.Schema({
    Username:{
        type:String,
        required:true,
        unique:true,
        min:[6,"Username should contain atleast 6 charcaters"],
        max:[40,"Username should not exceed 40 characters"],
    },
    password:{
        type:String,
        required:true,
        min:[8,"Password should contain atleast 8 characters"],
        max:[20,"Password should not exceed 20 characters "],
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    avatar:{
        type:String
    },
    fullname:{
        type:String,
        required:true,
    }
},{timestamps:true})

userSchema.pre("save",function(next){
    if(!this.isModeified("password"))return next();
    bcrypt.hash(this.password,10);
})



userSchema.methods.isPasswordCorrect=async function(password){
    await bcrypt.compare(this.password,password)
}

userSchema.methods.generateAccessToken= function(){
    return jwt.sign({
        _id=this._id,
        username=this.username,
        email=this.email,
        fullname=this.fullname,
    },process.env.RFERESH_TOKEN_SECRET_KEY,{
        expiresIn:REFRESH_TOKEN_EXPIRY
    })
}

userSchema.methods.generateRefereshToken =function(){
    return jwt.sign({
        _id=this._id
    },process.env.ACCESS_TOKEN_SECRET_KEY,{
        expiresIn:ACCESS_TOKEN_EXPIRY
    })
}

const User = mongoose.models("User",userSchema);

