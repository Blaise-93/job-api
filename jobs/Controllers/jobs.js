const jobs = require('../models/jobs')
const {StatusCodes} = require('http-status-codes')

const getAllJobs = async (req, res) => {
    res.send('')
}

const getJob = async (req, res) => {
    res.send('get a single job')
}

const createJob = async (req, res) => {
    //console.log(req.user)
    //const job = await jobs.create(req.body)
    //console.log(job)
    res.status(StatusCodes.OK).json(req.user)
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
