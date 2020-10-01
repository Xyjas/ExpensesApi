//initialize express router
let router = require('express').Router()

//set default API response
router.get('/', function (req, res) {
  res.json({
    status: 'API Works',
    message: 'Welcome to FirstRest API',
  })
})

//Import Expense Controller
var expenseController = require('./expenseController')

// Expense routes
router.route('/expense').get(expenseController.get).post(expenseController.add)

router.route('/expense/:expense_id').delete(expenseController.delete)

//Export API routes
module.exports = router
