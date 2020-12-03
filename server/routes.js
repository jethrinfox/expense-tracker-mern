const Router = require('express').Router
const router = new Router()

const transaction = require('./model/transaction/router')
const user = require('./model/user/router')

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to expense-tracker-mern API!' })
})

router.use('/transaction', transaction)
router.use('/user', user)

module.exports = router
