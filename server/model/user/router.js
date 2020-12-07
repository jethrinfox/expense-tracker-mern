const controller = require('./controller')
const Router = require('express').Router
const router = new Router()

router.route('/')
    .get((...args) => controller.getUser(...args))
    .post((...args) => controller.signup(...args))
    .delete((...args) => controller.logout(...args))

router.post('/login', (...args) => controller.login(...args))

module.exports = router
