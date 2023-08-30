const { CustomAPIError }  = require('./custom-error')
const { StatusCodes } = require('http-status-codes')
/** 
*This class objects handles incomming errors in our Task API functions
*/

class UnauthenticatedError extends CustomAPIError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED //uanthorized error

    }
}


// custom error instance function of each class.

module.exports =  UnauthenticatedError
 