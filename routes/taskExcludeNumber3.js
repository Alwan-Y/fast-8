const express = require('express')
const router = express.Router()
const taskExcludeNumber3 = require('../controllers/taskExcludeNumber3')
const { TaskExcludeNumber3Middleware } = require('../middlewares/taskExcludeNumber3')

router.post('/fibonacci', [TaskExcludeNumber3Middleware.fibonacci] , taskExcludeNumber3.fibonaci)
router.post('/combination', [TaskExcludeNumber3Middleware.combination] , taskExcludeNumber3.combination)
router.get('/countries', taskExcludeNumber3.getCountries)

module.exports = router