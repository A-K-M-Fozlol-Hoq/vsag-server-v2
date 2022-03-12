const coFounderController = require('../controllers/coFounderController');
const express = require('express');
// Destructuring controllers
const { addCoFounder, getCoFounder, updateCoFounder } = coFounderController;

// Router Object -- module scaffolding
let router = express.Router();

// Path => /admin/add
router.route('/add').post(addCoFounder);
// Path => admin/getAll
router.route('/getAll').get(getCoFounder);

// Path => admin/getByName/:searchStr
router.route('/updateFounder/:id').post(updateCoFounder);
module.exports = router;
