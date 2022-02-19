const mongoose = require('mongoose');

const propertiesSchema = new mongoose.Schema({
  propertyName: {
    type: String,
    maxlength: 55,
    minlength: 3,
    required: [true, 'The property name is required'],
  },
  category: {
    type: String,
    required: true,
    enum: {
      values: ['electronic', 'hygienic'],
      message: 'A category may be electronic,eygienic',
    },
    required: [true, 'The property needs to be in any category'],
  },
  image: {
    type: String,
  },
});

const Properties = mongoose.model('Properties', propertiesSchema);
module.exports = Properties;
