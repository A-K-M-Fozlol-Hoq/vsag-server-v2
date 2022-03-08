const slideController = require('../controllers/slideController');
const express = require('express');
// Destructuring controllers
const { addSlide, getSlides, deleteSlide } = slideController;

// Router Object -- module scaffolding
let router = express.Router();

// Path => /slide/add
router.route('/add').post(addSlide);

// Path => /slide/getAll
router.route('/getAll').get(getSlides);

// Path => /slide/deleteById/:searchStr
router.route('/deleteById/:id').delete(deleteSlide);
module.exports = router;
