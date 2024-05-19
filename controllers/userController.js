const UserSchema = require('../models/userModel')
const LogsSchema = require('../models/logsModel')
const jwt = require('jsonwebtoken')
const { v4: uuidv4 } = require('uuid');

const createToken = (_id, email, password, name, goals_array) => {
    return jwt.sign({_id, email, password, name, goals_array}, process.env.SECRET, { expiresIn: '3d' })
}

// login user
const loginUser = async(req, res) => {
    
    const {email, password} = req.body

    try {
        const user = await UserSchema.login(email, password)

        var f = `User with ID ${user.id} Login`;
        var logs_array = f;
        var userID = user._id;
        const logs1 = await LogsSchema.updateOne({userID: userID},{ $push: { logs_array: logs_array  } })

        // Creating a JWT Token
        const token = createToken(user._id, user.email, user.password, user.name, user.goals_array)

        res.cookie('token',token).json(user)
        
    } catch (error) {
        res.status(200).json({ error: error.message })
    }
}

const signout = async(req, res) => {

    try {

        res.cookie('token',null).json(user)
        
    } catch (error) {
        res.status(200).json({ error: error.message })
    }
}

// signup user
const signupUser = async(req, res) => {

    const { name, email, password } = req.body;
    var t = uuidv4();
    var goals_array = [t]

    try {
        const user = await UserSchema.signup(name, email, password, goals_array)

        var t = uuidv4();
        var f = `User with ID ${user.id} Registered!! }`;
        var tt = user._id;
        var userID = tt;
        var logs_array = [t,f];

        const logs1 = await LogsSchema.create({userID, logs_array})

        // Creating a JWT Token
        const token = createToken(user._id)

        res.status(201).json({ name, email, token })
    } catch (error) {
        res.status(200).json({ error: error.message })
        // return error
    }
}

// JWT user
const JwtVerify = (req, res) => {

    const {token} = req.cookies

    if(token){
        jwt.verify(token, process.env.SECRET, {}, (err,user) => {
            if(err) throw err
            res.json(user)
        })
    }else{
        res.json(null)
    }
}

module.exports = {
    loginUser,
    signupUser,
    JwtVerify,
    signout
}