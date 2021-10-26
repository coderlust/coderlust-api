const express = require('express');
const { sendemail, addemail, listemails } = require('../controllers/email');
const { validateEmail, validationRules } = require('../validators/email-validator');
const router = express.Router();

router.post('/sendemail', listemails, sendemail)
router.post('/addemail', validationRules(), validateEmail, addemail)

module.exports = router
