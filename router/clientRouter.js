// import clientController from '../controllers/clientController.js';
const clientController = require('../controllers/clientController');
const express = require('express');
// Destructuring controllers
const { addClient, getClients, deleteClient } = clientController;

// Router Object -- module scaffolding
let router = express.Router();

// Path => /client/add
router.route('/add').post(addClient);

// Path => client/getAll
router.route('/getAll').get(getClients);

// Path => client/getByName/:searchStr
router.route('/deleteById/:id').delete(deleteClient);
module.exports = router;
