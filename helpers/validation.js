const Joi = require('joi')

const companiesSchema = Joi.object({
    id: Joi.number()
        .integer()
        .min(1)
        .max(10),

    company_name: Joi
        .string()
        .required()
        .min(3)
        .max(50),

    telephone_number: Joi
        .string()
        .min(8)
        .max(16),

    is_active: Joi
        .boolean(),

    address: Joi
        .string()
        .min(10)
        .max(50),
        
})

const employeesSchema = Joi.object({
    id: Joi
        .number()
        .integer()
        .min(1)
        .max(10),

    name: Joi
        .string()
        .required()
        .min(2)
        .max(50),

    email: Joi
        .string()
        .required()
        .email()
        .min(5)
        .max(255),

    phone_number: Joi
        .string()
        .min(8)
        .max(16),

    jobtitle: Joi
        .string()
        .required()
        .valid("manager","director","staff"),

    company_id: Joi
        .number()
        .integer()
        .min(1)
        .max(10),
})

const checkIdSchema = Joi.object({
    id: Joi
    .number()
    .integer()
})

const checkIdCompanySchema = Joi.object({
    company_id: Joi
    .number()
    .integer()
    .min(1)
    .max(10),

    employee_id: Joi
    .number()
    .integer()
    .min(1)
    .max(10)
})

const updateEmployeeSchema = Joi.object({
    name: Joi
    .string()
    .required()
    .min(2)
    .max(50),

    phone_number: Joi
        .string()
        .min(8)
        .max(16),

    jobtitle: Joi
        .string()
        .required()
        .valid("manager","director","staff"),
})

module.exports = {
    companiesSchema,
    employeesSchema,
    checkIdSchema,
    checkIdCompanySchema,
    updateEmployeeSchema
}