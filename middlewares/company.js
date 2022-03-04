const { type } = require('express/lib/response')
const { companiesSchema, employeesSchema, checkIdSchema } = require('../helpers/validation')

const CompaniesMiddlewares = {
    addCompaniesMidleware: async (req, res, next) => {
        try {
            await companiesSchema.validateAsync(req.body)

            return next()
        } catch(error) {
            return res.status(400).json({
                code: 400,
                data: req.body,
                msg: error.message
            })
        }
    },

    setCompanyActiveMidleware: async (req, res, next) => {
        try {
            await checkIdSchema.validateAsync(req.params)

            return next()
        } catch(error) {
            return res.status(400).json({
                code: 400,
                data: {
                    isActive: false
                },
                msg: error.message
            })
        }
    }
}

module.exports = {
    CompaniesMiddlewares
}