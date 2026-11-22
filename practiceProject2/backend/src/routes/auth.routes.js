const express = require('express');
const authControllsers = require('../controllers/auth.controller');

const router = express.Router()

router.post('/register', authControllsers.registerUser)
router.post('/login',  authControllsers.loginUser)
router.post('/logout', authControllsers.logoutUser)

module.exports = router; 

