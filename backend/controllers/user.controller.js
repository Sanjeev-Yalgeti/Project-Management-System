//this is controller file
import asyncHandler from "../utils/asyncHandler"

const registerUser = asyncHandler(async(req,res)=>{
    /*get user details from frontend 
    
    */


    const{fullname,username,email,password} = req.body



})

export default registerUser