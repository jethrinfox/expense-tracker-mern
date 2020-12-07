const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('../model/user/facade')
const helpers = require('./helpers')


passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, async (username, password, next) => {
    const user = await User.findOne({ email: username })
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