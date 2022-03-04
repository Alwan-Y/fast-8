const express = require('express')
const router = express.Router()
const { CompaniesMiddlewares} = require('../middlewares/company') 
const { CompaniesController }  = require('../controllers/company')

router.get('/companies', CompaniesController.getCompanies)
router.post('/companies', [CompaniesMiddlewares.addCompaniesMidleware], CompaniesController.addCompanies)
router.put('/companies/:id/set_active', [CompaniesMiddlewares.setCompanyActiveMidleware], CompaniesController.setCompanyActive)

module.exports = router