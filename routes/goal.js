const express = require('express');
const cors = require('cors')

// Auth setUp
const {
    createaGoal,
    getaGoal,
    getAllGoal,
    deleteaGoal
} = require('../controllers/goalController')

const router = express.Router();

// create goal
router.post('/creategoal', createaGoal)

// get single goal
router.get('/getgoal/:id', getaGoal)

// get all goals
router.get('/getallgoal', getAllGoal)

// delete a goal
router.delete('/deletegoal/:id', deleteaGoal)

module.exports = router;