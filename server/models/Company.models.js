import mongoose from 'mongoose'
const CompanySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
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
},{timestamps:true
})
export const Company=mongoose.model("Company",CompanySchema)