const express = require('express');
const cors = require('cors')

// Task setUp
const {
    createaTask,
    findalltasks,
    deleteatask,
    taskcheck,
    settaskgoalarray
} = require('../controllers/taskController')

const router = express.Router();

// create a task
router.post('/createatask', createaTask)

// set goal to user goal array
router.post('/settaskgoalarray', settaskgoalarray)

// Find all tasks given a userID and goalID
router.get('/findalltasks/:id', findalltasks)

// delete a task 
router.delete('/deleteatask/:id', deleteatask)

// check or uncheck a task 
router.patch('/taskcheck', taskcheck)

// update a task 
// router.patch('/updateatask', updateatask)

module.exports = router;