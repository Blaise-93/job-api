const  User = require('../models/Users')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError } = require('../errors/index')
const bcrypt = require('bcryptjs')

const register = async (req, res) => {
try {    
    const { name, email, password } = req.body
    if(!name || !email || !password) {
        throw new BadRequestError('Please provide name, email and password')
    }
   else {
         const user =  await User.create(req.body)
        console.log(user)
        res.status(StatusCodes.CREATED).json({ user })
   }
} 
 catch (error) {
    console.log(error)
}
}

const login = async (req, res)  => {

    //const user = User.schema()

    res.send('login user')
}


module.exports = {
    register,
    login
}
