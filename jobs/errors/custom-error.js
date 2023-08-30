 /** 
*This class objects handles incomming errors in our Task API functions
*/

//NB: A constructor mthd is a new mtd we invoke when we create a new
// instances of a class, same in meaning with __init__ in python .
// super invokes the parent class props, here our superclass is Error

class CustomAPIError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode

    }
}


// custom error instance function of each class.

const createCustomError = (msg, statusCode) => {
    return new CustomAPIError(msg, statusCode)
}

module.exports = { createCustomError, CustomAPIError}
