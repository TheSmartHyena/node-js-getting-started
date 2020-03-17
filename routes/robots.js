exports.initRobots = async function (app){
    app.route('/robots')
      .get(async function(req, res) {
           res.json(await app.models.Robot.findAll())
      })
}
