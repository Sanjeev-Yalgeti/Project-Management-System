class ApiResponse{
    constructor(statusCode, message = "Sucess", data){
        this.statusCode = statusCode;
        this.message = message;
        this.data=data;//Added data 
        this.success = statuscode < 400;

    }
}

export {ApiResponse}