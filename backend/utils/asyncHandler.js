//This is used to handle rejected promise so that the app doesnt crash 
const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve.apply(requestHandler(req,res,next)).catch((error)=>next(error))
    }
}


export default asyncHandler;