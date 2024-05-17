const GoalSchema = require('../models/goalModel')
// const jwt = require('jsonwebtoken')


// create a Goal
const createaGoal = async(req, res) => {
    
    const { goalID, task_array } = req.body

    try {
        const user = await GoalSchema.create({goalID, task_array})

        res.status(200).json(user)
        // res.status(200).json({
        //     goal: 'created'
        // })
    } catch (error) {
        res.status(200).json({ error: error.message })
    }
}



// get a Goal
const getaGoal = async(req, res) => {
    
    const {goalID, task_array} = req.body

    try {
        const user = await GoalSchema.create(goalID, task_array)

        res.status(201).json({user})
    } catch (error) {
        res.status(200).json({ error: error.message })
    }
}

// get all Goals
const getAllGoal = async(req, res) => {
    
    const {goalID, task_array} = req.body

    try {
        const user = await GoalSchema.create(goalID, task_array)

        res.status(201).json({user})
    } catch (error) {
        res.status(200).json({ error: error.message })
    }
}

// delete a Goal
const deleteaGoal = async(req, res) => {
    
    const {goalID, task_array} = req.body

    try {
        const user = await GoalSchema.create(goalID, task_array)

        res.status(201).json({user})
        // res.status(200).json({
        //     goal: 'created'
        // })
    } catch (error) {
        res.status(200).json({ error: error.message })
    }
}

module.exports = {
    createaGoal,
    getaGoal,
    getAllGoal,
    deleteaGoal
}