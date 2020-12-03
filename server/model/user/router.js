const controller = require('./controller')
const Router = require('express').Router
const router = new Router()

router.route('/')
  .get((...args) => controller.login(...args))
  .post((...args) => controller.signup(...args))

router.route('/logout')
  .get((...args) => controller.logout(...args))



module.exports = router
