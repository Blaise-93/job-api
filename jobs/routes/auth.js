const express = require('express')
const route = express.Router()




const { login, register } = require('../Controllers/auth')

route.post('/register', register)
route.post('/register', login)

module.exports = route