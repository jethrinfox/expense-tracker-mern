const controller = require('./controller')
const Router = require('express').Router
const router = new Router()


router.post('/signup', (...args) => controller.signup(...args))

router.post('/login', (...args) => controller.login(...args))

router.get('/logout', (...args) => controller.logout(...args))


module.exports = router
