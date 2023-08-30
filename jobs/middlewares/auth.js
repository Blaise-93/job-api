const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors/index')

const authenticationMiddleware = async (req, res, next) => {
    console.log(req.headers.authorization)
    const authHeader = req.headers.authorization
    
    if(!authHeader || !authHeader.startsWith('Bearer')) {
        throw new UnauthenticatedError('No token provided')
    }

    const token = authHeader.split(' ')[1]
    console.log(token)

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decoded)
        const { id, username } = decoded
        // for user req
        req.user = { id, username }
        next()     
  
   
    } catch (error) {
        throw new UnauthenticatedError('Not authorized to access this route')
   
    }
 
    next()
        
}

module.exports = authenticationMiddleware