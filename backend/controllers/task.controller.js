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

const updateTaskStautus = asyncHandler( async (req,res) => {

})

const deleteTask = asyncHandler( async (req,res) => {
    
})

