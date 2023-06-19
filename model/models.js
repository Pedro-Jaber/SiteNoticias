const { DataTypes } = require("sequelize")
const db = require('./dbconnection')


const tags = db.sequelize.define("tags", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  tag: DataTypes.STRING
}, {
  timestamps: false,
  tableName: 'tags'
})

const news = db.sequelize.define("news", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: DataTypes.TEXT,
  image: {
    type: DataTypes.STRING,
    defaultValue: 'default.jpg'
  },
  call:  DataTypes.TEXT,
  body:  DataTypes.TEXT
}, {
  tableName: 'news'
})

const tagNews = db.sequelize.define("tagNews", {}, {
  timestamps: false,
  tableName: 'tagNews'
})


tags.belongsToMany(news, {through: 'tagNews'})
news.belongsToMany(tags, {through: 'tagNews'})


module.exports = { tags, news, tagNews }