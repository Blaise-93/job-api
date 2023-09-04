const { CustomAPIError }  = require('./custom-error')
const { StatusCodes } = require('http-status-codes')

/** 
*This class objects handles incomming NotFound errors in our Task API functions
*/
 
class NotFoundError extends CustomAPIError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.NOT_FOUND

    }
}


// custom error instance function of each class.

module.exports =  NotFoundError
