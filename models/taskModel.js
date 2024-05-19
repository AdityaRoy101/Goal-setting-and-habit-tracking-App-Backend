const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const validator = require('validator');

// User Schema Defination
const taskSchema = new Schema({
    userID: {
        type: String,
        required: true,
        // unique: true
    },
    goalID: {
        type: String,
        required: true,
        // unique: true
    },
    task_name: {
        type: String
    },
    task_Quantity: {
        type: Number
    },
    frequency_Array: {
        type: Array
    },
    reminder: {
        type: Boolean
    },
    checked: {
        type: Boolean
    }
}, { timestamps: true })

module.exports = mongoose.model('TaskSchema', taskSchema);