const { Companies, Employees } = require('../models')
const sequelize = require('../config/sequelize')
const res = require('express/lib/response')

const EmployeesController = {
    getEmployeesByCompanyId: async (req, res) => {
        try {
            const { id } = req.params
            const getAllDataEmployeeByIdCompanies = await Companies.findOne({
                attributes: ['id', 'company_name', 'is_active'],
                include: [{
                    model: Employees
                }]
            }, { where : { id } })

            return res.status(200).json({
                code: 200,
                data: {
                    getAllDataEmployeeByIdCompanies
                },
                msg: "Success"
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
                attributes: ['id', 'name', 'phone_number', 'jobtitle']
            },{
                where : { id }
            })

            return res.status(200).json({
                code: 200,
                data: getEmployeeById,
                msg: "Success"
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
                code: 200,
                data: {
                    company_id: req.params.company_id
                },
                msg: "Success"
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
                data: {
                    company_id: req.params.company_id
                },
                msg: "Success"
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