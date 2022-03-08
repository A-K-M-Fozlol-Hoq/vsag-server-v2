const adminController = require('../controllers/adminController');
const express = require('express');
// Destructuring controllers
const { addAdmin, isAdmin, getAll, deleteAdmin, isValid } = adminController;

// Router Object -- module scaffolding
let router = express.Router();

// Path => /admin/add
router.route('/add').post(addAdmin);
// Path => admin/getAll
router.route('/getAll').get(getAll);

// Path => admin/login
router.route('/login').post(isAdmin);

router.route('/isValid').post(isValid);

// Path => admin/getByName/:searchStr
router.route('/deleteById/:id').delete(deleteAdmin);
module.exports = router;
