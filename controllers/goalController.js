const GoalSchema = require('../models/goalModel')
const UserSchema = require('../models/userModel')
const { v4: uuidv4 } = require('uuid');
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
// const jwt = require('jsonwebtoken')


// create a Goal
const createaGoal = async(req, res) => {
    
    // const { goalID, task_array, _id } = req.body
    const { goalID } = req.body
    var t = uuidv4();
    var task_array = [t]
    // const { _id } = req.body

    try {
        const user = await GoalSchema.create({goalID, task_array})

        // var udd = user._id;
        res.status(200).json(user._id)
        // res.status(200).json(user._id)
        // res.status(200).json({
        //     goal: 'created'
        // })
    } catch (error) {
        res.status(200).json({ error: error.message })
    }
}

/// set goal to user goal array
const setgoalarray = async(req, res) => {
    
    // const { goalID, task_array, _id } = req.body
    const { userId, data } = req.body
    // var t = uuidv4();
    // var task_array = [t]
    // const { _id } = req.body

    try {
        // {data.data.error && res.status(404)}
        const user = await UserSchema.updateOne({_id: userId}, { $push: { goals_array: data.data  } })

        // var udd = user._id;
        res.status(200).json(user)
        // res.status(200).json(user._id)
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
    deleteaGoal,
    setgoalarray
}