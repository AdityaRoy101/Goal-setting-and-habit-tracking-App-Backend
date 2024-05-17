const express = require('express');
const cors = require('cors')

// Auth setUp
const {
    createaTask,
    getaTask,
    getAllTask,
    deleteaTask
} = require('../controllers/taskController')

const router = express.Router();

// create goal
router.post('/createatask', createaTask)

// get single goal
router.get('/getatask/:id', getaTask)

// get all goals
router.get('/getalltask', getAllTask)

// delete a goal
router.delete('/deleteatask/:id', deleteaTask)

module.exports = router;