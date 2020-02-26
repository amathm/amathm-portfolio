const express = require('express');
const userModel = require('../model/user.model')
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'test'
  });
});

module.exports = router;
