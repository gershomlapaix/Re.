const express = require('express');
const propertiesController = require('../controllers/propertiesController');
const router = express.Router();

// CREATE NEW property
router.route('/').post(propertiesController.createProperty);
module.exports = router;
