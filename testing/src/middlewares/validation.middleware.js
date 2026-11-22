const {body, validationResult } = require("express-validator");

const validateResult = async (req, res, next)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({message: errors.array()})
    }

    next() ; 

}

const registerUserValidationRules = [
    body('username')
    .isString()
    .withMessage('username must be a string')
    .isLength({min: 2, max:20})
    .withMessage("username must be between 3 and 20 charecters"),

    body("email")
    .isEmail()
    .withMessage('invalid email '),

    body("password")
    .isString()
    .withMessage('password must be string')
    .isLength({min:8, max:30})
    .withMessage("password leingth must be between 8 to 30 charecter")
    .isStrongPassword()
    .withMessage("Password must be strong "),
    validateResult
]

module.exports = {registerUserValidationRules};