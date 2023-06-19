const models = require('../model/models')
const { Op } = require("sequelize");



module.exports.homePage = async (req, res) => {
  const title = 'Home Page'

  models.news.findAll({ 
    limit: 20, 
    order: [['createdAt', 'DESC']]
  }).then((news) => {
    res.render('home', {title: title, news: news })
    //res.json(news)
  })
  .catch((error) => {
    console.error(error);
  });
}

module.exports.newsFiltered = async (req, res) => {
  const filtro = req.params.filtro

  models.news.findAll({
    limit: 20, 
    order: [['createdAt', 'DESC']],
    include: [{
        model: models.tags,
        where: {
          tag: filtro
        }
      }]
  }).then((news) => {
    res.render('newsFiltered', {title: filtro, news: news })
    //res.json(news)
  }).catch((error) => {
    console.error(error);
  });
}

module.exports.news = async (req, res) => {
  const newsId = req.params.id

  models.news.findOne({
    include: "tags",
    where: {
      id: newsId
    }
  }).then((news) => {
    res.render('news', {title: "test", news: news})
    //res.json(news)
  }).catch((error) => {
    console.error(error);
  });
}