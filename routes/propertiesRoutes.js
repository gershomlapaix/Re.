const express = require('express');
const propertiesController = require('../controllers/propertiesController');
const authController = require('../controllers/authController');
const router = express.Router();

router
  .route('/')
  .get(propertiesController.getAllProperties)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    propertiesController.createProperty
  );

module.exports = router;
