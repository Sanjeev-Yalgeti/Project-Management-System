import mongoose from 'mongoose'
const notesSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,

    },
    expiry:{
        type:Date,
    },
},{timestamps:true})
export default Notes=mongoose.model("Notes",notesSchema)