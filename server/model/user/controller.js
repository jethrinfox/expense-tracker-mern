const Controller = require('../../lib/controller')
const userFacade = require('./facade')
const passport = require('passport');

class UserController extends Controller {

    signup(req, res, next) {
        passport.authenticate('local.signup', (err, user, info) => {
            if (err) { return next(err); }
            req.logIn(user, (err) => {
                if (err) { return next(err); }
                return res.status(201).json({
                    success: true,
                    user
                })
            });
        })(req, res, next);
    }

    login(req, res, next) {
        passport.authenticate('local.login', (err, user, info) => {
            if (err) { return next(err); }
            req.logIn(user, (err) => {
                if (err) { return next(err); }
                return res.status(201).json({
                    success: true,
                    user
                })
            });
        })(req, res, next);
    }

    logout(req, res, next) {
        req.logOut()
        res.redirect('/login')
    }

}

module.exports = new UserController(userFacade)
