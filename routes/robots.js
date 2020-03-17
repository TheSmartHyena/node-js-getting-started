exports.initRobots = async function (app){
    app.get('/robots', async function(req, res) {
           res.json(await app.models.Robot.findAll())
      });
}
