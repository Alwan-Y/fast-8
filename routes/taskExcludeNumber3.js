const express = require('express')
const router = express.Router()
const taskExcludeNumber3 = require('../controllers/taskExcludeNumber3')

router.post('/fibonacci', taskExcludeNumber3.fibonaci)
router.post('/combination', taskExcludeNumber3.combination)
router.get('/countries', taskExcludeNumber3.getCountries)

module.exports = router