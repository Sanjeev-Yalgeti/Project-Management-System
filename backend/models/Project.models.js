import mongoose from 'mongoose'
import {customAlphabet} from 'nanoid'
const custom =customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz',6)
const projectSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    projectId:{
        type:String,
        default:()=>`project_${custom()}`,
        unique:true,
    },
    description:{
        type:String,
        required:true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    // creationDate:{
    //     type:Date,
    //     required:true,
    //     default:Date.now,
    // },
    members:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        default:[],
    }],
    task:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Task",
        default:[],
    }],
},{timestamps:true})
export const Project=mongoose.model("Project",projectSchema)