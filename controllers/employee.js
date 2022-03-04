const { Companies, Employees } = require('../models')
const sequelize = require('../config/sequelize')
const res = require('express/lib/response')

const EmployeesController = {
    getEmployeesByCompanyId: async (req, res) => {
        try {
            const { id } = req.params
            const getAllDataEmployeeByIdCompanies = await Companies.findOne({
                attributes: ['company_name'],
                include: [{
                    model: Employees
                }]
            }, { where : { id } })

            return res.status(200).json({
                succes: true,
                kode: 200,
                msg: getAllDataEmployeeByIdCompanies
            })
        } catch(error) {
            return res.status(500).json({
                succes: false,
                kode: 500,
                msg: error.message
            })
        }
    },

    getEmployeeById: async (req, res) => {
        try {
            const { id } = req.params
            const getEmployeeById = await Employees.findOne({
                where : { id }
            })

            return res.status(200).json({
                succes: true,
                kode: 200,
                msg: getEmployeeById
            })

        } catch(error) {
            return res.status(500).json({
                succes: false,
                kode: 500,
                msg: error.message
            })
        }
    },

    addEmployee: async (req, res) => {
        const transaction = await sequelize.transaction();
        try {
            const { company_id } = req.params
            const insertEmployee = await Employees.create({
                company_id: company_id,
                ...req.body
            }, {
                transaction: transaction,
            });

            transaction.commit()

            return res.status(200).json({
                succes: true,
                kode: 200,
                msg: 'Succes add new employee !'
            })
        } catch(error) {
            return res.status(500).json({
                succes: false,
                kode: 500,
                msg: error.message
            })
        }
    },

    updateEmployee: async (req, res) => {
        const transaction = await sequelize.transaction();
        try {
            const { company_id, employee_id } = req.params

            const updateEmployee = await Employees.update({
                company_id: company_id,
                ...req.body
            }, { where: { company_id: company_id, id: employee_id } } , {
                transaction: transaction,
            });

            transaction.commit()

            return res.status(200).json({
                succes: true,
                kode: 200,
                msg: 'Succes update employee !'
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

module.exports = {
    EmployeesController
}