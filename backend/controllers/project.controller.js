import {ApiError} from '../utils/ApiErrors.js'
import { ApiResponse} from '../utils/ApiResponse.js'
import {Project} from '../models/Project.models.js'
import asyncHandler from '../utils/asyncHandler.js'
//add Project

const addProject =asyncHandler(async (req,res) =>
    {
        const {title ,description,user._id,members,task }=req.body;
        
        if ([title,description,userId].some((field)=>field?.trim()===''))
    {
        throw new ApiError(400,'All fields are required .');
    }

    const existedProject=await Project.findOne({
        title:[title.toUpperCase()]
    })
    
    if(existedProject)
        {
        throw new ApiError(409,'Project with same title exists!')
    }

    const project= await Project.create({
        title:title.toUpperCase(),
        owner:user._id,
        description,
        members,
        task,  
    })
    return res.status(201).json(
        new ApiResponse(201, project, "Project created successfully")
    );
})

//fetch project details
//fetch list of project
//delete project
//update project
const listProject =asyncHandler(async (req,res)=>{
    const projectList= await Project.find({
        members:req.user._id
    })
    return res.status(201).json(
        new ApiResponse(201,projectList,"Projects fetched successfully")
    )
})

export {addProject,listProject};