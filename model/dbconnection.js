const { Sequelize, Model } = require('sequelize')


const sequelize = new Sequelize("database", "user", "pass", {
  host: '../db.sqlite',
  dialect: 'sqlite',
  storage: "D:/Pedro/Desktop/pedro/CODES/NodeJs/A05-SiteNoticias/db.sqlite"
});

module.exports = {
  Sequelize,
  sequelize,
  Model
}