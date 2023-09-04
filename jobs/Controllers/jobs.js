const Job = require('../models/jobs')
const {StatusCodes} = require('http-status-codes')
const { BadRequestError, CustomAPIError } = require('../errors')


const getAllJobs = async (req, res) => {
    console.log(req.user.userId)
    const jobs = await Job.find({createdBy: req.user.userId }).sort('position')
    res.status(StatusCodes.OK).json({jobs, count: jobs.length})
}

const getJob = async (req, res) => {
    res.send('get a single job')
}

const createJob = async (req, res) => {
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    console.log(job)
    res.status(StatusCodes.CREATED).json({job})
}

const updateJob = async (req, res) => {
    res.send('update job')
}

const deleteJob = async (req, res) => {
    res.send('delete job')
}


module.exports = 
{
    getAllJobs,
    getJob,
    updateJob,
    createJob,
    deleteJob 

    
}
