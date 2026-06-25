import mongoose from 'mongoose'
const TaskSchema=new mongoose.Schema({
    objective:{
        type:String,
        required:true,
    },
    desc:{
        required:true,
        type:String,
    },
    assignedTo:{
        required:true,
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    status:{
        required:true,
        type:String,
        enum:["Assigned","Ongoing","Completed"],
        default:"Assigned",
    },
    project:{
        required:true,
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project"
    },
    dueDate:{
        type:Date,
    },
},{timestamps:true}
)  
export const Task=mongoose.model("Task",TaskSchema)
