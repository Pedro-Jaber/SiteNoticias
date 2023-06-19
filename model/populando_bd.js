const db = require('./dbconnection')
const models = require('./models')


//models.news.sync({force: true})
//models.news.sync()
//models.tags.sync({force: true})
//models.tags.sync()

/*
Esportes,
Entreterimento,
Economia,
Política,
Saúde,
Educação,
Internacional,
Ciência,
Tecnologia,
Meio Ambiente
*/

/*
tag: "esportes"
tag: "entreterimento"
tag: "economia"
tag: "politica"
tag: "saude"
tag: "internacional"
tag: "ciencia"
tag: "meio-ambiente"
*/




db.sequelize.sync()
  .then(() => {
    /*
    const test = models.tags.build({tag: "esportes"})
    console.log(test)
    test.save()
    */

    //models.tags.create({tag: "esportes news"})


    //models.news.sync({force: true})
    //models.news.sync()
    //models.tags.sync({force: true})
    //models.tags.sync()



    console.log('test')
    const query = models.tags.findAll()
    console.log(query)






  })
  .catch((err) => {
    console.log(err)
  })