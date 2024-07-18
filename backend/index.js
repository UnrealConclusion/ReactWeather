/**
 * Server for React Weather App
 */
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
const apiPort = 3001 // port this server is using 

const weatherRouter = require('./routes/weather-router') // routes for weather API

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.use('/api', weatherRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));