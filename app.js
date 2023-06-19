const express = require("express");
const expressLayout = require('express-ejs-layouts');
const siteRoutes = require('./routers/site')
const dbRoutes = require('./routers/popdb')
const { syncBd } = require('./middleware/popdb')
const db = require('./model/dbconnection')


const app = express()
const PORT = 8081


// middleware
app.use(express.static('public'))
app.use(express.json())


// Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


// Routes
app.get("/db/*", syncBd)
app.post("/db/*", syncBd)
app.use(siteRoutes)
app.use("/db", dbRoutes)

db.sequelize.authenticate()
  .then(() => {
    console.log("=~=~=~=~=~=~=~=~=~=~=~=~=~=")

    app.listen(PORT, () => {
      console.log("Database:\x1b[92m Connected \x1b[0m")
      console.log("Server:\x1b[92m Online \x1b[0m")
      console.log("Port: " + PORT)
      console.log(`link: http://localhost:${PORT}`)
      console.log(":>")
    })
  })
  .catch((err) => {
    console.log("Database:\x1b[31m Not Connected \x1b[0m")
    console.log("\x1b[31mError connecting to database:\x1b[0m \n" + err)
  })