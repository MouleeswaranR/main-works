const ErrorHandler = require("../utils/errorHandler");

module.exports=(err,req,res,next)=>{
  err.statusCode=err.statusCode||400;

  if(process.env.NODE_ENV == 'development'){
      res.status(err.statusCode).json({
      message:err.message,
      success:false,
      stack:err.stack,
    })
  }

  if(process.env.NODE_ENV == "production"){
      let message=err.message;
      let error=new Error(message);
      if(err.name == 'ValidationError'){
        message=Object.values(err.errors).map(value=>value.message);
        error = new ErrorHandler(message,401);
      }

      if(err.name == 'CastError'){
        message = `Resource Not Found: ${err.path}`;
        error = new Error(message);
      }
    
      res.status(err.statusCode).json({
      message:error.message||"Internal Server Error",
      success:false,
      
    })
  }
}

