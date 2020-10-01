//Import Expense Model
Expense = require('./expenseModel')

//Get Expenses
exports.get = function (req, res) {
  Expense.get(function (err, expenses) {
    if (err)
      res.json({
        status: 'error',
        message: err,
      })
    res.json({
      status: 'success',
      message: 'Got Expenses Successfully!',
      expenses: expenses,
    })
  })
}

//For creating new expense
exports.add = function (req, res) {
  console.log('adding', req.body)
  var expense = new Expense()
  expense.name = req.body.name
  expense.amount = req.body.amount

  //Save and check error
  expense.save(function (err) {
    if (err) {
      return res.json(err)
    }

    res.json({
      message: 'New Expense Added!',
      data: expense,
    })
  })
}

// Delete Expense
exports.delete = function (req, res) {
  Expense.deleteOne(
    {
      _id: req.params.expense_id,
    },
    function (err, contact) {
      if (err) res.send(err)
      res.json({
        status: 'success',
        message: 'Expense Deleted',
      })
    }
  )
}
