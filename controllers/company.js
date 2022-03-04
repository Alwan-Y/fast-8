const { Companies } = require('../models')
const sequelize = require('../config/sequelize')

const CompaniesController = {
    getCompanies: async (req, res) => {
        try {

            const [
                count,
                data
            ] = await Promise.all([
                Companies.count(),
                Companies.findAll()
            ])

            return res.status(200).json({
                code: 200,
                data: {
                    count: count,
                    rows: data
                },
                msg: "Success"
            })
        } catch (error) {
            return res.status(500).json({
                code: 500,
                data: null,
                msg: error.message
            })
        }
    },

    addCompanies: async (req, res) => {
        const transaction = await sequelize.transaction();
        try {
            const insertCompanie = await Companies.create(req.body, {
                transaction: transaction,
            });

            transaction.commit()

            return res.status(200).json({
                code: 200,
                data: req.body,
                msg: "Success"
            })
        } catch(error) {
            return res.status(500).json({
                code: 500,
                data: null,
                msg: error.message
            })
        }
    },

    setCompanyActive: async (req, res) => {
        const transaction = await sequelize.transaction();
        try {
            const { id } = req.params

            const updateCompanie = await Companies.update({
                is_active: true
                }, {
                    where: { id }
                }, {
                    transaction: transaction,
                }
            )

            transaction.commit()

            return res.status(200).json({
                code: 200,
                data: {
                    isActive: true
                },
                msg: 'Success'
            })

        } catch(error) {
            return res.status(500).json({
                code: 500,
                data: {
                    isActive: false
                },
                msg: error.message
            })
        }
    }
}

module.exports = { CompaniesController }
