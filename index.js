const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express()

const { Op } = require("sequelize");

app.use(express.json());

const modelRobot = require('./models/robot.js');
const routeRobot = require('./routes/robot.js');
app.models = {};

async function initModels(app){
    await modelRobot.initRobot(app);
}

async function initRoutes(app){
    await routeRobot.initRobot(app);
}

initModels(app);
initRoutes(app);

pp.listen(PORT, () => console.log(`Listening on ${ PORT }`))
