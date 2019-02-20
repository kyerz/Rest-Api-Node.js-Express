const express = require('express')
const app = express()
const router = express.Router()
const settings = require('./settings')
const routes = require('./routes')

router.get('/employees', routes.employees.listAllEmployees)

app.use('/api', router)

app.listen(settings.APIServerPort, () => console.log(`Listening on port ${settings.APIServerPort}`))
