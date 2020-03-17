const express = require('express')
const app = express()

const { Op } = require("sequelize");

app.use(express.json());

const modelRobot = require('./models/robot.js');
const routeRobot = require('./routes/robot.js');
const routeRobots = require('./routes/robots.js');
app.models = {};

async function initModels(app){
    await modelRobot.initRobot(app);
}

async function initRoutes(app){
    await routeRobot.initRobot(app);
    await routeRobots.initRobots(app);
}

initModels(app);
initRoutes(app);

app.listen(5000, function () {
  console.log('Example app listening on port 3000!')
})
