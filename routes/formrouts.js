const express = require('express');
const router = express.Router();
const { submitForm } = require('../controler/formcon');

router.post('/submit', submitForm);

module.exports = router;
