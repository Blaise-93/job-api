const express = require('express')
const route = express.Router()


/* 
{   "name": "blaise",
     "email": "blaise@gmail.com",
    "password": "blaise"
}
*/

const { login, register } = require('../Controllers/auth')

route.post('/register', register)
route.post('/login', login)

module.exports = route