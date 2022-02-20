const express = require('express');
const morgan = require('morgan');
// const helmet = require('helmet');
// const rateLimit = require('express-rate-limit');
// const mongoSanitize = require('express-mongo-sanitize');
// const xss = require('xss-clean');
// const hpp = require('hpp');

const app = express();

// Secutiy control packages
// app.use(helmet());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// const limiter = rateLimit({
//   max: 100,
//   windowMs: 60 * 60 * 1000,
//   message: 'Too many requests from this IP, please try again in an hour',
// });

// app.use('/api', limiter);

app.use(express.json({ limit: '10kb' }));

// app.use(mongoSanitize);

// app.use(xss)


app.use('/api/v1/rent', require('./routes/propertiesRoutes'));
app.use('/api/v1/users', require('./routes/userRoutes'));


module.exports = app;
