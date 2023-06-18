const models = require('../model/models')



module.exports.homePage = async (req, res) => {
  const title = 'Home Page'
  const news = await models.news.findAll({ limit: 20, order: [['createdAt', 'DESC']], include: "tags"})
  //res.json(news)
  res.render('home', {title: title, news: news })
}

module.exports.newsFiltered = (req, res) => {
  const filtro = req.params.filtro
  res.render('newsFiltered', {title: filtro})
}


/*
app.get('/', (req, res) => {
  //res.send('home page')
  const title = 'top'
  res.render('new', {title: title})
})

app.get('/:teste', (req, res) => {
  //res.send('home page')
  console.log(req.params.teste)
  res.send(req.params.teste)
})
*/