const express = require('express')
const router = express.Router()
const { EmployeesMiddlewares} = require('../middlewares/employee') 
const { EmployeesController }  = require('../controllers/employee')

router.get('/companies/:id/employees', EmployeesController.getEmployeesByCompanyId)
router.get('/employees/:id', EmployeesController.getEmployeeById)
router.post('/companies/:company_id/employees', [EmployeesMiddlewares.addEmployeesMiddleware], EmployeesController.addEmployee)
router.put('/companies/:company_id/employees/:employee_id', [EmployeesMiddlewares.updateEmployeesMiddleware], EmployeesController.updateEmployee)


module.exports = router