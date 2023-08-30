const express = require('express')

const route = express.Router()

const { 
    getAllJobs,
    getJob, 
    createJob,
    updateJob,
    deleteJob 
} = require('../Controllers/jobs')


route.route('/').get(getAllJobs).post(createJob)
route.route('/:id').get(getJob).delete(deleteJob).patch(updateJob)

module.exports = route