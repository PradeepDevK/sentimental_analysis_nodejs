const express = require('express');
const router = express.Router();
const sentimentalController = require('../controllers/sentimentalController');

//Sentimental Analysis
router.post('/generateReport', sentimentalController.generateReport);

module.exports = router;