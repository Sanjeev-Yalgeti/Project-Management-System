import mongoose from 'mongoose'
const CompanySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    avatar:{
        type:String,
    },
    noOfProjects:{
        type:Number,
    },
    desc:{
        type:String,
    },
    authenticated:{
        type:Boolean,
        required:true,
    }
},{timestamps:true
})
export const Company=mongoose.model("Company",CompanySchema)

