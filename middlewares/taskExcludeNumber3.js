const { type } = require('express/lib/response')
const { fibonacciSchema, cobinationSchema } = require('../helpers/validation')

const TaskExcludeNumber3Middleware = {
    fibonacci: async (req, res, next) => {
        try {
            const checkBody = await fibonacciSchema.validateAsync(req.body)

            return next()
        } catch(error) {
            return res.status(400).json({
                code: 400,
                data: null,
                msg: error.message
            })
        }
    },

    combination: async (req, res, next) => {
        try {
            const checkBody = await cobinationSchema.validateAsync(req.body)

            return next()
        } catch(error) {
            return res.status(400).json({
                code: 400,
                data: null,
                msg: error.message
            })
        }
    }
}

module.exports = {
    TaskExcludeNumber3Middleware
}