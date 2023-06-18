const { query } = require('express')
const models = require('../model/models')


// INSERT

module.exports.dbPopTag = (req, res) => {
  //console.log(req.body)

  models.tags.bulkCreate(req.body).then(() => {
    console.log("tag created")
  }).catch((err) => {
    console.log("tag NOT created: " + err)
  })
}

module.exports.dbPopNews = (req, res) => {
  //console.log(req.body)

  models.news.bulkCreate(req.body).then(() => {
    console.log("news created")
  }).catch((err) => {
    console.log("news NOT created: " + err)
  })
}

module.exports.dbPopTagNews = (req, res) => {
  //console.log(req.body)

  models.tagNews.bulkCreate(req.body).then(() => {
    console.log("relation tag-news created")
  }).catch((err) => {
    console.log("relation tag-news NOT created: " + err)
  })
}

// SELECT

module.exports.alltags = async (req, res) => {
  const query = await models.tags.findAll()
  res.send(query)
}

module.exports.allnews = async (req, res) => {
  const query = await models.news.findAll()
  res.send(query)
}

module.exports.alltagnews = async (req, res) => {
  const query = await models.tagNews.findAll()
  res.send(query)
}