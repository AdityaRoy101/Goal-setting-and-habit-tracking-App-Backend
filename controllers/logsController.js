// const LogsSchema = require('../models/logsModel')
// const { v4: uuidv4 } = require('uuid');


// // set logs
// const loginUser = async(req, res) => {
    
//     const { userID } = req.body

//     try {
//         const user = await UserSchema.login(email, password)

//         // Creating a JWT Token
//         const token = createToken(user._id, user.email, user.password, user.name, user.goals_array)

//         // res.status(201).json({ email, token })
//         res.cookie('token',token).json(user)
//     } catch (error) {
//         res.status(200).json({ error: error.message })
//     }
// }

// // signup user
// const signupUser = async(req, res) => {

//     const { name, email, password } = req.body;
//     var t = uuidv4();
//     var goals_array = [t]

//     try {
//         const user = await UserSchema.signup(name, email, password, goals_array)

//         // Creating a JWT Token
//         const token = createToken(user._id)

//         res.status(201).json({ name, email, token })
//     } catch (error) {
//         res.status(200).json({ error: error.message })
//         // return error
//     }
// }

// // JWT user
// const JwtVerify = (req, res) => {

//     const {token} = req.cookies

//     if(token){
//         jwt.verify(token, process.env.SECRET, {}, (err,user) => {
//             if(err) throw err
//             res.json(user)
//         })
//     }else{
//         res.json(null)
//     }
// }

// module.exports = {
//     loginUser,
//     signupUser,
//     JwtVerify
// }