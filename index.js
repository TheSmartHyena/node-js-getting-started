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

<<<<<<< HEAD
pp.listen(PORT, () => console.log(`Listening on ${ PORT }`))
=======
app.get('/', (req, res) => res.json({key:"value"}))

app.get('/users', (req, res) => {
    res.json({"msg":"users"});
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
>>>>>>> parent of 1b73967... 1.0
