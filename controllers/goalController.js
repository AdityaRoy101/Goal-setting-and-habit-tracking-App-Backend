const GoalSchema = require('../models/goalModel')
const UserSchema = require('../models/userModel')
const LogsSchema = require('../models/logsModel')
const { v4: uuidv4 } = require('uuid');


// create a Goal
const createaGoal = async(req, res) => {
    
    const { userId, goalID, goalStartDate, goalEndDate } = req.body
    var t = uuidv4();
    var task_array = [t]

    try {
        const user = await GoalSchema.create({userId, goalID, goalStartDate, goalEndDate, task_array})

        var userID = user.userId;
        var f = `User with user ID ${userID} created a goal with goal ID ${user._id}`;
        var logs_array = f;

        const logs1 = await LogsSchema.updateOne({userID: userID},{ $push: { logs_array: logs_array  } })

        res.status(200).json(user._id)
    } catch (error) {
        res.status(200).json({ error: error.message })
    }
}


// Delete a Goal
const deleteaGoal = async(req, res) => {
    
    const { id } = req.params

    try {
        const user = await GoalSchema.findByIdAndDelete({_id: id})

        var userID = user.userId;
        var f = `User with user ID ${userID} deleted a goal with goal ID ${user._id}`;
        var logs_array = f;

        const logs1 = await LogsSchema.updateOne({userID: userID},{ $push: { logs_array: logs_array  } })

        res.status(200).json(user)
    } catch (error) {
        res.status(200).json({ error: error.message })
    }
}


// Update a Goal
// const updateaGoal = async(req, res) => {
    
//     const { userId, goalID, goalStartDate, goalEndDate } = req.body
//     var t = uuidv4();
//     var task_array = [t]

//     try {
//         const user = await GoalSchema.create({userId, goalID, goalStartDate, goalEndDate, task_array})
//         res.status(200).json(user._id)
//     } catch (error) {
//         res.status(200).json({ error: error.message })
//     }
// }



/// set goal to user goal array
const setgoalarray = async(req, res) => {
    
    const { userId, data } = req.body

    try {
        const user = await UserSchema.updateOne({_id: userId}, { $push: { goals_array: data.data  } })

        var userID = user.userID;
        var f = `User with user ID ${userID} settted a goal in the user goal_array with ID ${user._id}`;
        var logs_array = f;

        const logs1 = await LogsSchema.updateOne({userID: userID},{ $push: { logs_array: logs_array  } })

        res.status(200).json(user)
    } catch (error) {
        res.status(200).json({ error: error.message })
    }
}

// get all Goals given the user id
const allusergoals = async(req, res) => {
    
    const { id } = req.params

    try {
        const user = await GoalSchema.find({userId: id})

        res.status(201).json({user})
    } catch (error) {
        res.status(200).json({ error: error.message })
    }
}


module.exports = {
    createaGoal,
    deleteaGoal,
    setgoalarray,
    allusergoals
}