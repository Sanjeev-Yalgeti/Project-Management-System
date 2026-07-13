import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'


app.use(cors(
    {
        origin:process.env.CORS_ORIGIN,
        credentials:true
    }
))
//route imports
import userRouter from "./routes/user.routes.js"
//route declaration
app.use("/api/v1/user",userRouter)
app.use("/api/v1/projects",projectRouter)