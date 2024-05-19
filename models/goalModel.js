const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const validator = require('validator');

// User Schema Defination
const goalSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    goalID: {
        type: String,
        required: true,
    },
    goalStartDate: {
        type: String,
        required: true,
    },
    goalEndDate: {
        type: String,
        required: true,
    },
    task_array: {
        type: Array,
        // required: true,
        // unique: true
    }
}, { timestamps: true })

module.exports = mongoose.model('GoalSchema', goalSchema);