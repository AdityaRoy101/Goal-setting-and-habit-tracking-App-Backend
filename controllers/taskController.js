const TaskSchema = require('../models/taskModel')
const GoalSchema = require('../models/goalModel')
const LogsSchema = require('../models/logsModel')


// create a Task
const createaTask = async(req, res) => {
    
    const { userID, goalID, task_name, task_Quantity, frequency_Array, reminder, checked } = req.body


    try {
        const user = await TaskSchema.create({userID, goalID, task_name, task_Quantity, frequency_Array, reminder, checked})

        var f = `User with ID ${userID} created a task with ID ${user.id}`;
        var logs_array = f;
        const logs1 = await LogsSchema.updateOne({userID: userID},{ $push: { logs_array: logs_array  } })

        res.status(200).json(user._id)
    } catch (error) {
        res.status(200).json({ error: error.message })
    }
}



/// set task to goal array
const settaskgoalarray = async(req, res) => {
    
    const { goalID, data } = req.body

    try {
        const user = await GoalSchema.findOneAndUpdate({_id: goalID}, { $push: { task_array: data.data  } })

        var f = `User with goal ID ${goalID} filled goals_array with task ID ${user._id}`;
        var logs_array = f;
        var userID = user.userId;
        const logs1 = await LogsSchema.updateOne({userID: userID},{ $push: { logs_array: logs_array  } })

        res.status(200).json(user)
    } catch (error) {
        res.status(200).json({ error: error.message })
    }
}



// Find all tasks given a userID and goalID
const findalltasks = async(req, res) => {
    
    const { id } = req.params

    try {
        const user = await TaskSchema.find({goalID: id})

        res.status(200).json(user)
    } catch (error) {
        res.status(200).json({ error: error.message })
    }
}


// Delete a task given a userID and goalID and taskID
const deleteatask = async(req, res) => {
    
    const { id } = req.params

    try {
        const user = await TaskSchema.findByIdAndDelete({_id: id})

        var userID = user.userID;
        var f = `User with user ID ${userID} deleted task with task ID ${id}`;
        var logs_array = f;
        // var userID = user._id;
        const logs1 = await LogsSchema.updateOne({userID: userID},{ $push: { logs_array: logs_array  } })

        res.status(200).json(user)
    } catch (error) {
        res.status(200).json({ error: error.message })
    }
}

// task check or uncheck
const taskcheck = async(req, res) => {
    
    const { id, check } = req.body

    var checked = check;
    try {
        const user = await TaskSchema.findByIdAndUpdate({_id: id},{checked: checked})

        var userID = user.userID;
        var f = `User with user ID ${userID} checked task with task ID ${id}`;
        var logs_array = f;

        const logs1 = await LogsSchema.updateOne({userID: userID},{ $push: { logs_array: logs_array  } })

        res.status(200).json(user)
    } catch (error) {
        res.status(200).json({ error: error.message })
    }
}


// Update a task given a userID and goalID and taskID, 
// const updateatask = async(req, res) => {
    
//     const { userID, goalID, id, task_name, task_Quantity, frequency_Array } = req.body

//     try {
//         const user = await TaskSchema.findById({_id:id},{task_name: task_name},{task_Quantity: task_Quantity},{frequency_Array: frequency_Array})

//         res.status(200).json(user)
//     } catch (error) {
//         res.status(200).json({ error: error.message })
//     }
// }


module.exports = {
    createaTask,
    findalltasks,
    deleteatask,
    taskcheck,
    settaskgoalarray
}