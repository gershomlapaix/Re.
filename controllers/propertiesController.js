const Properties = require('./../models/propertiesModel');
const factory = require('./handlerFactory');

exports.createProperty = factory.createOne(Properties);
exports.getAllProperties = factory.getAll(Properties);