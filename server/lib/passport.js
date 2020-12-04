const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('../model/user/facade')

const helpers = require('./helpers')


passport.use('local.signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
}, async (req, username, password, next) => {
    const user = await User.findOne({ email: username })
    if (user) {
        return next(null, false)
    } else {
        let newUser = {
            username: req.body.username,
            email: req.body.email,
            password,
        }
        newUser.password = await helpers.encryptPassword(password)
        newUser = await User.create(newUser)
        console.log(newUser);
        return next(null, newUser)
    }
}))


passport.use('local.login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
}, async (req, username, password, next) => {
    console.log(username, password);
    const user = await User.findOne({ email: username })
    console.log(user);
    if (user) {
        const validPassword = await helpers.matchPassword(password, user.password)
        if (validPassword) {
            next(null, user)
        } else {
            next(null, false)
        }
    } else {
        return next(null, false)
    }
}))


passport.serializeUser((user, next) => {
    next(null, user._id);
});

passport.deserializeUser((id, next) => {
    User.findById(id, (err, user) => next(err, user));
});