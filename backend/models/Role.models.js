import mongoose from 'mongoose'
const roleSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    accessLevel:{
        type:Number,
        required:true,
        min:0,
        max:4,
    }
})
export const Role=mongoose.model("Role",roleSchema)