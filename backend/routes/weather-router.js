/**
 * Router for weather queries 
 */
const express = require('express');
const weatherCtrl = require('../controllers/weather-ctrl');
const router = express.Router();

router.get('/weather/:latitude/:longitude', weatherCtrl.getWeather);
router.get('/location/:zipcode', weatherCtrl.getLocation);

module.exports = router