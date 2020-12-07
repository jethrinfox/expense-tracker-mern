const Controller = require('../../lib/controller')
const userFacade = require('./facade')
const passport = require('passport');

class UserController extends Controller {

    signup(req, res, next) {
        const { username, email, password } = req.body
        this.facade.findOne({ email }, async (err, user) => {
            if (err) throw err
            if (user) {
                console.log("User already exists");
                return res.status(400).json({
                    success: false,
                    error: "User already exists"
                })
            }
            else {
                let newUser = {
                    username,
                    email,
                    password,
                }
                newUser.password = await helpers.encryptPassword(password)
                newUser = await this.facade.create(newUser)
                return res.status(201).json({
                    success: true,
                    user: newUser,
                })
            }
        })
    }

    login(req, res, next) {
        passport.authenticate('local', (err, user, info) => {
            if (err) next(err)
            req.logIn(user, (err) => {
                if (err) { return next(err); }
                return res.status(200).json({
                    success: true,
                    user
                })
            });
        })(req, res, next);
    }

    logout(req, res, next) {
        req.logOut()
    }

    getUser(req, res, next) {
        res.send(req.user)
    }

}

module.exports = new UserController(userFacade)
