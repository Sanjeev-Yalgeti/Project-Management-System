import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        minlength:[6,"Username should contain atleast 6 charcaters"],
        maxlength:[40,"Username should not exceed 40 characters"],
        
    },
    password:{
        type:String,
        required:true,
        minlength:[8,"Password should contain atleast 8 characters"],
        maxlength:[20,"Password should not exceed 20 characters "],
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        trim:true,
    },
    avatar:{
        public_id:String,
        url:string,
    },
    fullname:{
        type:String,
        required:true,
    }
},{timestamps:true})

userSchema.pre("save",async function(next){
    if(!this.isModified("password"))return next();
    this.password= await bcrypt.hash(this.password,10);
    next();
})

userSchema.methods.isPasswordCorrect=async function(password){
    await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken= function(){
    return jwt.sign({
        _id=this._id,
        username=this.username,
        email=this.email,
        fullname=this.fullname,
    },process.env.ACCESS_TOKEN_SECRET_KEY,{
        expiresIn:ACCESS_TOKEN_EXPIRY
    })
}

userSchema.methods.generateRefereshToken =function(){
    return jwt.sign({
        _id=this._id
    },process.env.REFRESH_TOKEN_SECRET_KEY,{
        expiresIn:REFRESH_TOKEN_EXPIRY
    })
}

const User = mongoose.model("User",userSchema);
export default User

