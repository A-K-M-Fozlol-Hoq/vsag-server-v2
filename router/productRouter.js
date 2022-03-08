const productController = require('../controllers/productController');
const express = require('express');
// Destructuring controllers
const { addProduct, getProducts, deleteProduct } = productController;

// Router Object -- module scaffolding
let router = express.Router();

// Path => /product/add
router.route('/add').post(addProduct);

// Path => product/getAll
router.route('/getAll').get(getProducts);

// Path => product/deleteById/:searchStr
router.route('/deleteById/:id').delete(deleteProduct);
module.exports = router;
