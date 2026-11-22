const userModel = require("../models/user.model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { json } = require("express");

async function registerUser(req, res) {
    
    const { username, email, password, role } = req.body
    const isUserAlreadyExist = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    if (isUserAlreadyExist) {
        return res.status(409).json({
            message: 'user already Registered'
        })
    }

    // hassing password  her by bcrypt 
    const hash = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username,
        email,
        password : hash,
        role,
    })

    const token = jwt.sign({
        id: user._id,
        role: user.role
    }, process.env.JWT_SECRET)


    res.cookie('token', token)
    res.status(201).json({
        messege: 'user Registered successfully',
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role
        }
    })

}


async function loginUser (req, res){
    const {username, email, password, } = req.body ; 

    const user = await userModel.findOne({
        $or: [
            {username},
            {email}
        ]
    })

    if(!user) {
        return res.status(401).json({
            messege : "invalid credencials"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    
    if(!isPasswordValid) {
        return res.status(401).json({message: "invalid credentials"})
    }

    const token = jwt.sign({
        id: user._id,
        role: user.role
    }, process.env.JWT_SECRET)

    res.cookie('token', token)
    res.status(200).json({
        message: "user logged in successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email, 
            role: user.role
        }
    })
}

async function logoutUser(req, res) {
    res.clearCookie("token") ;
    res.status(200).json({message: "user logout succesfully"})
}

module.exports = { registerUser, loginUser, logoutUser };