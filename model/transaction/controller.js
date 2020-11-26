const Controller = require('../../lib/controller')
const transactionFacade = require('./facade')

class TransactionController extends Controller {}

module.exports = new TransactionController(transactionFacade)
