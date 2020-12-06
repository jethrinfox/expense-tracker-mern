const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Please add a description'],
  },
  amount: {
    type: Number,
    required: [true, 'Please add a positive or negative number']
  },
  category: {
    type: String,
    trim: true,
    default: 'various'
  },
  date: {
    type: Date,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now
  },

})

module.exports = transactionSchema
