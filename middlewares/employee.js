const { type } = require('express/lib/response')
const { employeesSchema, checkIdCompanySchema, updateEmployeeSchema } = require('../helpers/validation')

const EmployeesMiddlewares = {
    addEmployeesMiddleware: async (req, res, next) => {
        try {
            const [
                checkBody,
                checkParams
            ] = await Promise.all([
                employeesSchema.validateAsync(req.body),
                checkIdCompanySchema.validateAsync(req.params)
            ])

            return next()
        } catch(error) {
            return res.status(500).json({
                succes: false,
                kode: 500,
                msg: error.message
            })
        }
    },

    updateEmployeesMiddleware: async (req, res, next) => {
        try {
            const [
                checkBody,
                checkParams
            ] = await Promise.all([
                updateEmployeeSchema.validateAsync(req.body),
                checkIdCompanySchema.validateAsync(req.params)
            ])

            return next()
        } catch(error) {
            return res.status(500).json({
                succes: false,
                kode: 500,
                msg: error.message
            })
        }
    },
}

module.exports = {
    EmployeesMiddlewares
}