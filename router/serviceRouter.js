// import serviceController from '../controllers/serviceController';
const serviceController = require('../controllers/serviceController');
const express = require('express');
// Destructuring controllers
const { addService, getServices, deleteService } = serviceController;

// Router Object -- module scaffolding
let router = express.Router();

// Path => /service/add
router.route('/add').post(addService);

// Path => service/getAll
router.route('/getAll').get(getServices);

// Path => service/deleteById/:searchStr
router.route('/deleteById/:id').delete(deleteService);
module.exports = router;
