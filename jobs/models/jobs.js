const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
    company:{
        type: String,
        required: [true, 'Please provide company name'],
        maxLength: 50

    },

    position:{
        type: String,
        required: [true, 'Please provide company name'],
        maxLength: 100

    },
    status: {
        type: String,
        enum:['interview', 'declined', 'pending']
        ,default:'pending'
    },
    // helps us to tie the user model above to this one
    //invariably called foreign key in SQL
    //thus assign to one of the users
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: [true, 'Please provide user']

    }


}, {timestamps: true})

module.exports = mongoose.model('Job', JobSchema)