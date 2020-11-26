const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
    default: 'various'
  },
  createdBy: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },

})

module.exports = transactionSchema
