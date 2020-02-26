const express = require('express');
const morgan = require('morgan');
const UserRouter = require('./router/user.router')

const app = express();

app.use(morgan('dev'));
app.use('/api', UserRouter);

module.exports = app;
