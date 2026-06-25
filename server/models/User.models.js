import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: [6, "username should contain atleast 6 characters"],
      max: [25, "username should not exceed 25 characters"],
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: [8, "Password should contain atleast 8 characters"],
      max: [40, "password should not exceed 40 characters"],
    },
    avatar: {
      type: String,
    },
  },
  { timestamps: true },
);


userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      username: this.username,
      password: this.password,
      email: this.email,
      fullName: this.fullName,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    },
  );
};


userSchema.methods.generateAccessToken =function(){
    return jwt.sign({
        _id:this.id,
        username:this.username
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
)
}

export const User = mongoose.model("user", userSchema);
