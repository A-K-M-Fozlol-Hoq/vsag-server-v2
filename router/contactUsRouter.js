const contactUsController = require('../controllers/contactUsController');
const express = require('express');
// Destructuring controllers
const { addForm, getAll, deleteForm } = contactUsController;

// Router Object -- module scaffolding
let router = express.Router();

// Path => /contactUs/add
router.route('/add').post(addForm);

// Path => contactUs/getAll
router.route('/getAll').get(getAll);

// Path => contactUs/getBytId/:searchStr
router.route('/contactUs/:id').delete(deleteForm);
module.exports = router;
