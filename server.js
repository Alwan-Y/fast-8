const express = require('express')
const app = express()
const db = require('./models')
const PORT = process.env.PORT || 3000
const companyRoutes = require('./routes/company')
const employeeRoutes = require('./routes/employee')
const taskExcludeNumber3 = require('./routes/taskExcludeNumber3')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api', [companyRoutes, employeeRoutes, taskExcludeNumber3]);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
})