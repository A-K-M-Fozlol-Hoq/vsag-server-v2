const pageController = require('../controllers/pageController');
const express = require('express');
// Destructuring controllers
const {getAll,  addPage, getPage, deletePage } = pageController;

// Router Object -- module scaffolding
let router = express.Router();

// Path => /slide/add
router.route('/add').post(addPage);

// Path => /slide/getAll
router.route('/getPageBySlug/:slug').get(getPage);
router.route('/getAll').get(getAll);

// Path => /slide/deleteById/:searchStr
router.route('/deleteById/:id').delete(deletePage);
module.exports = router;
