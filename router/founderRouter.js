const founderController = require('../controllers/founderController');
const express = require('express');
// Destructuring controllers
const { addFounder, getFounder, updateFounder } = founderController;

// Router Object -- module scaffolding
let router = express.Router();

// Path => /admin/add
router.route('/add').post(addFounder);
// Path => admin/getAll
router.route('/getAll').get(getFounder);

// Path => admin/getByName/:searchStr
router.route('/updateFounder/').post(updateFounder);
module.exports = router;
