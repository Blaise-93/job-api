const { CustomAPIError } = require('../errors/custom-error')
const { StatusCodes } = require('http-status-codes')


/**  
* Error handler events for our middlewares to handle our internal error
*/

const errorHandlerMiddleware = (err, req, resp, next) => {
    if(err instanceof  CustomAPIError) {
        return resp.status(err.statusCode)
            .json({msg: err.message})
    }
    
    //console.log(err)
    return resp.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({msg: err}) 
}

module.exports = errorHandlerMiddleware