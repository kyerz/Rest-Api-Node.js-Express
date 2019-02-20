const express = require('express')
const app = express()
const router = express.Router()
const PORT = 8080
const routes = require('./routes')

router.get('/employees', routes.employees.listAllEmployees)

app.use('/api', router)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
