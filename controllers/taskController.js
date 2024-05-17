const TaskSchema = require('../models/taskModel')
// const jwt = require('jsonwebtoken')


// create a Goal
const createaTask = async(req, res) => {
    
    const { taskID, task_Quantity, frequency_Array } = req.body

    try {
        const user = await TaskSchema.create({taskID, task_Quantity, frequency_Array})

        res.status(200).json(user)
        // res.status(200).json({
        //     goal: 'created'
        // })
    } catch (error) {
        res.status(200).json({ error: error.message })
    }
}



// get a Goal
const getaTask = async(req, res) => {
    
    const {goalID, task_array} = req.body

    try {
        const user = await TaskSchema.create(goalID, task_array)

        res.status(201).json({user})
    } catch (error) {
        res.status(200).json({ error: error.message })
    }
}

// get all Goals
const getAllTask = async(req, res) => {
    
    const {goalID, task_array} = req.body

    try {
        const user = await TaskSchema.create(goalID, task_array)

        res.status(201).json({user})
    } catch (error) {
        res.status(200).json({ error: error.message })
    }
}

// delete a Goal
const deleteaTask = async(req, res) => {
    
    const {goalID, task_array} = req.body

    try {
        const user = await TaskSchema.create(goalID, task_array)

        res.status(201).json({user})
        // res.status(200).json({
        //     goal: 'created'
        // })
    } catch (error) {
        res.status(200).json({ error: error.message })
    }
}

module.exports = {
    createaTask,
    getaTask,
    getAllTask,
    deleteaTask
}