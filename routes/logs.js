const express = require('express');
const cors = require('cors')

// Auth setUp
const {
    logs
} = require('../controllers/logsController')

const router = express.Router();

// logs route
router.post('/logs', logs)

module.exports = router;