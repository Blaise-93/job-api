
const  User = require('../models/Users')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors/index')
const jwt = require('jsonwebtoken') 

const register = async (req, res) => {
try {    
    const { name, email, password } = req.body
    if(!name || !email || !password) {
        throw new BadRequestError('Please provide name, email and password')
    }

    
    const user =  await User.create(req.body)
    console.log(user)
    const token = user.createJWT()
        //ppty we want to send to our user/client
    res.status(StatusCodes.CREATED).json(
                {user:{name: user.name}, token }
            )
} 
 catch (error) {
    console.log(error)
}
}

const login = async (req, res)  => {
    const { email, password } = req.body
    
    if(!email || !password) {
        throw new BadRequestError("Kindly provide the required fields to login.")
    }
    //const user = User.schema()
    const user = await User.findOne({email})
    if(!user) {
        throw new UnauthenticatedError("Invalid Credentials")
    }
    // check user password
    /* const isPasswordCorect = await user.comparePassword(password)  
    if(!isPasswordCorect){
        throw new UnauthenticatedError("Invalid Password.")
    }  */
    else {
    // if user exist, then we create a login token
    const token = user.createJWT();
    res.status(StatusCodes.OK)
           .json({user:{name:user.name }, token})

    }
}


module.exports = {
    register,
    login
}
