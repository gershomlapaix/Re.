const express = require('express');
const morgan = require('morgan');
const propertiescontroller = require('./routes/propertiesRoutes')

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use((req, res, next) => {
  console.log("As I'm middleware, I will run on each request sent");
  next();
});

app.use('/api/v1/rent',propertiescontroller)

module.exports = app;
