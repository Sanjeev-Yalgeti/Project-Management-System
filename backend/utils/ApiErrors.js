class ApiError extends error {
    constructor(
        statuscode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message);
        this.statusCode = statuscode;
        this.data = null ;
        this.message = message;
        this.success = false;
        this.error = errors;
        if(stack){
            this.stack = null;
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}