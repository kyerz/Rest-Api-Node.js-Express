//employees handlers functions here
const data = require('./mocks/data.json')

const listAllEmployees = (req, res) => {
  const connection = req.app.locals.connection
  connection.query("SELECT e.id, e.name, e.address, e.email, e.hired, e.dob, e.salary, e.bonus, e.photo, d.name as 'Departments', d.location from employees e JOIN departments d ON e.department = d.id", (error, result) => {
    if (error) {
      return res.status(500).json(error)
    }
    res.status(200).json(result)
  })
  return res.status(200)
}

module.exports = { listAllEmployees }
