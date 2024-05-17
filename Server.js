require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const userAuthRoutes = require('./routes/user')
const goalRoutes = require('./routes/goal')
const taskRoutes = require('./routes/task')

// express app
const app = express()

// middleware
app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173'
}))

app.use(cookieParser());
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/user', userAuthRoutes)
app.use('/api/user/goal', goalRoutes)
app.use('/api/user/goal/task', taskRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })