const db = require('../model/dbconnection')
const models = require('../model/models')


module.exports.syncBd = (req, res, next) => {
  db.sequelize.sync().then(() => {
    console.log("database synced")
    next()
  }).catch((err) => {
    console.log("Error synchronizing the database: " + err)
    res.status(500).json({ error: err.message })
  })
}

