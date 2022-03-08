const express = require('express');
// Destructuring controllers
const emailController = require('../controllers/emailController');
const { sendEmail } = emailController;

// Router Object -- module scaffolding
let router = express.Router();

// Path => /email/send
router.route('/send').post(sendEmail);

module.exports = router;
