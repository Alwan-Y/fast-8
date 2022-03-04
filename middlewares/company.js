const { type } = require('express/lib/response')
const { companiesSchema, employeesSchema, checkIdSchema } = require('../helpers/validation')

const CompaniesMiddlewares = {
    addCompaniesMidleware: async (req, res, next) => {
        try {
            await companiesSchema.validateAsync(req.body)

            return next()
        } catch(error) {
            return res.status(500).json({
                succes: false,
                kode: 500,
                msg: error.message
            })
        }
    },

    setCompanyActiveMidleware: async (req, res, next) => {
        try {
            await checkIdSchema.validateAsync(req.params)

            return next()
        } catch(error) {
            return res.status(500).json({
                succes: false,
                kode: 500,
                msg: error.message
            })
        }
    }
}

module.exports = {
    CompaniesMiddlewares
}