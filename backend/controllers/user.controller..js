//this is controller file
import asynchandler from "../utils/asyncHandler"

const registerUser = asynchandler(async(req,res)=>{
    /*get user details from frontend 
    
    */


    const{fullname,username,email,password} = req.body



})

export default registerUser