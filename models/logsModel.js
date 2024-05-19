const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Logs Schema Defination
const logsSchema = new Schema({
    userID: {
        type: String,
        required: true,
        // unique: true
    },
    logs_array: {
        type: Array,
        // unique: true
    }
}, { timestamps: true })


module.exports = mongoose.model('LogsSchema', logsSchema);