var mongoose = require('mongoose')

//schema
var expenseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: String,
    required: true,
  },
})

// Export Expense Model
var Expense = (module.exports = mongoose.model('expense', expenseSchema))

module.exports.get = function (callback, limit) {
  Expense.find(callback).limit(limit)
}
