const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const validator = require('validator');

// User Schema Defination
const taskSchema = new Schema({
    taskID: {
        type: String,
        required: true,
        unique: true
    },
    task_Quantity: {
        type: Number
    },
    frequency_Array: {
        type: Array
    }
}, { timestamps: true })

module.exports = mongoose.model('TaskSchema', taskSchema);