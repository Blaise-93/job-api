const User = require('../models/Users')


/** 
 * TODO:
Register Route:
Create it's schema.

Validate - name, email and password - with mongoose
Hash password (with bcryptjs)
Create token
Send response with token

*/

const register = async (req, res) => {
    res.send('register user')
}

const login = async (req, res)  => {

    const user = User.schema()

    res.send('login user')
}


module.exports = {
    register,
    login
}
