import mongoose from "mongoose";
import express from "express";
import {DB_NAME} from "../constants.js";

//as the db connection can take time to connect we will use async/await in this function
async function dbConnect(){
    try{
        //To check whether there is already a connection to database 
        if(mongoose.connection.readyState>=1){
            console.log("Already connected to MongoDb")
            return
        }
        //if no connection to database then we connect
        const connectionInstance = await mongoose.connect(`${process.env.MONGOOSE_URL}/${DB_NAME}`)
        console.log("MongoDb connected !! DB HOST:${connectionInstance.connection.host")
    }
    catch(error){
        console.log(`Failed to connect to the database ${error}`)
        process.exit(1)
    }
}


export default dbConnect