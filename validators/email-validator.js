const { body, validationResult } = require("express-validator");

exports.validationRules = () => {
    return [
        body('email').isEmail()
    ]
}

exports.validateEmail = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

    return res.status(422).json({
        errors: extractedErrors,
    })
}