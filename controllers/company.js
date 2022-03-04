const { Companies } = require('../models')
const sequelize = require('../config/sequelize')

const CompaniesController = {
    getCompanies: async (req, res) => {
        try {
            const getAllData = await Companies.findAll()

            return res.status(200).json({
                succes: true,
                kode: 200,
                msg: getAllData
            })
        } catch (error) {
            return res.status(500).json({
                succes: false,
                kode: 500,
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
                succes: true,
                kode: 200,
                msg: 'Succes add new companie !'
            })
        } catch(error) {
            return res.status(500).json({
                succes: false,
                kode: 500,
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
                succes: true,
                kode: 200,
                msg: 'Succes set companie to active !'
            })

        } catch(error) {
            return res.status(500).json({
                succes: false,
                kode: 500,
                msg: error.message
            })
        }
    }
}

module.exports = { CompaniesController }
