const express = require('express');
const propertiesController = require('../controllers/propertiesController');
const router = express.Router();


router.route('/').post(propertiesController.createProperty).get(propertiesController.getAllProperties)
module.exports = router;
