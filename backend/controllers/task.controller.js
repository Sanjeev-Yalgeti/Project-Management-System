import {ApiError} from '../utils/ApiErrors.js'
import { ApiResponse} from '../utils/ApiResponse.js'
import {Task } from '../models/Task.models.js'
import asyncHandler from '../utils/asyncHandler.js'

const addTask = asyncHandler (async (req,res) => {
    //Store data
    const {objective,desc,assignedTo,status,project,dueDate} =req.body
    //validate empty
    if([objective,desc,asssignedTo,project,dueDate].some((field)=>field?.trim()===""))
    {
        throw new ApiError(400,"Fill mandatory fields .")
    }
    //check if already exist
    const existedTask=await Task.findOne(
        {
            $and:[{objective},{assignedTo},{project}]
        }
    )
    if(existedTask)
    {
        throw new ApiError(409,"Task with same objective is assigned to User in this project")
    }
    //Create Task in DB
    const task=await Task.create(
        {
            objective:objective,
            desc:desc,
            assignedTo:assignedTo,
            project:project,
            dueDate:dueDate,
            status:status,
        }
    )
    return res.status(201).json(
        new ApiResponse(201,task,"Task created successfully ")
    )
})
//fetch tasks of the user
const userTask=asyncHandler(async (req,res)=>{
    const userTaskList=await Task.find({
        projectId:project._id,
        assignedTo:user_.id
    })
    return res.status(201).json(
        new ApiResponse(201,userTaskList,"Tasks successfully fetched")
    )
})
const updateTaskStautus = asyncHandler( async (req,res) => {
    const {id}=req.params;
    const {status }=req.body;
    const taskUpdate=await Task.findByIdAndUpdate(
        id,
        status
    );
    if(!taskUpdate)
    {
        return new ApiError(401)
    }
    return res.status(201).json(
        new ApiResponse(201,"Task Updated successfully")
    )
})

const deleteTask = asyncHandler( async (req,res) => {
    const {title}=req.body;
    const deleteTask=await Task.findByIdAndDelete(
        title
    )
    if(!deleteTask){
        return new ApiError(401,deleteTask)
    }
    return res.status(201).json(
        new ApiResponse(201,"Task deleted successfully")
    )
})

