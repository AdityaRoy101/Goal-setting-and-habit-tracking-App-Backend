const express = require('express');
const cors = require('cors')

// goal setUp
const {
    createaGoal,
    deleteaGoal,
    setgoalarray,
    allusergoals
} = require('../controllers/goalController')

const router = express.Router();

// create goal
router.post('/creategoal', createaGoal)

// set goal to user goal array
router.post('/setgoalarray', setgoalarray)

// set all user goals all at a time
router.get('/allusergoals/:id', allusergoals)

// update a goal 
// router.patch('/allusergoals/:id', updateaGoal)

// detete a goal
router.delete('/deleteaGoal/:id', deleteaGoal)

module.exports = router;