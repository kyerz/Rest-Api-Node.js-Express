//employees handlers functions here
const data = require('./mocks/data.json')

const listAllEmployees = (req, res) => {
  return res.status(200).json(data)
}

module.exports = { listAllEmployees }