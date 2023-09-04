const { CustomAPIError } = require('../errors/custom-error')
const { StatusCodes } = require('http-status-codes')


/**  
* Error handler events for our middlewares to handle our internal error
*/

const errorHandlerMiddleware = (err, req, resp, next) => {
 
    let customError = {
        // set default
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong try again later'
    }

     // mongoose code error
     if(err.code && err.code === 11000) {
        // override the message
        customError.msg =  `Duplicate value entered  for ${ Object.keys(err.keyValue) } field,
        please choose another value`
        customError.statusCode = 400
    }
    
    if(err instanceof  CustomAPIError) {
        return resp.status(customError.statusCode)
            .json({msg: customError.msg})
    }
   
    
    //console.log(err)
    return resp.status(StatusCodes.INTERNAL_SERVER_ERROR).json({err})
    //return resp.status(customError.statusCode)
     //   .json({msg: customError.msg}) 
}

module.exports = errorHandlerMiddleware