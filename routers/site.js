const { Router } = require('express')
const siteController = require('../controllers/site')

const router = Router()

router.get('/', siteController.homePage)
router.get('/:filtro', siteController.newsFiltered)

module.exports = router