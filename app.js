const express = require('express')
const app = express()
const router = express.Router()
const settings = require('./settings')
const routes = require('./routes')
const mysql = require('mysql')

const connection = mysql.createConnection(settings.database)

router.get('/employees', routes.employees.listAllEmployees)

app.use('/api', router)

connection.connect(error => {
  if (error) {
    console.log('Error connecting to the database', error)
    return process.exit()
  }
  app.locals.connection = connection
  app.listen(settings.APIServerPort, () => console.log(`Listening on port ${settings.APIServerPort}`))
})
