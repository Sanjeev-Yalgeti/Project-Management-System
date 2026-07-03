import mongoose from 'mongoose'
const notesSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,

    },
    createdOn:{
        type:Date,
        default:Date.now,
        required:true,
    },
    expiry:{
        type:Date,
    },
},{timestamps:true})
export default Notes=mongoose.model("Notes",notesSchema)