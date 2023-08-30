const { CustomAPIError }  = require('./custom-error')
const { StatusCodes } = require('http-status-codes')

/** 
*This class objects handles incomming errors in our Task API functions
*/
 
class BadRequestError extends CustomAPIError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST

    }
}


// custom error instance function of each class.

module.exports =  BadRequestError
