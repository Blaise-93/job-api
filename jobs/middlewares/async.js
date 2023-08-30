/** 
    * A wrapper to handle all the catch/block functionality in our
    * controller Task functions
*/

const asyncWrapper = (callback) => {
    return async (req, res, next ) => {
        try {
            await callback(req, res, next)
        } catch (error) {
            // incase of an error
            // thus we are passing it to next
            // middleware which we havent learnt in our node_intro.js

            next(error)
        }
    }
} 

module.exports = asyncWrapper