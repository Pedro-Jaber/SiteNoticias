const { Router } = require('express')
const popdbController = require('../controllers/popdb')

const router = Router()

router.post('/pop/tag', popdbController.dbPopTag)
router.post('/pop/news', popdbController.dbPopNews)
router.post('/pop/tagnews', popdbController.dbPopTagNews)
router.get('/tags', popdbController.alltags)
router.get('/news', popdbController.allnews)
router.get('/tagnews', popdbController.alltagnews)

module.exports = router