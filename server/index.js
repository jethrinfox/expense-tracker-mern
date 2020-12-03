// Index.js

/*
*   Imports
*/
require('dotenv').config()
const express = require('express')
const helmet = require('helmet');
const hpp = require('hpp');
const morgan = require('morgan')
const mongoose = require('mongoose')
const session = require('express-session');
const passport = require('passport');
const rateLimit = require("express-rate-limit");
const MongoStore = require('connect-mongo')(session);

/*
*   Config
*/
const app = express()
require('./lib/db')
require('./lib/passport')
const PORT = process.env.PORT || 8080
const ENV = process.env.NODE_ENV || 'dev'
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 })


/*
*   Middlewares
*/
app.use(helmet())
app.use(session({
    secret: 'verysecret',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(hpp())
app.use(limiter)
app.use(passport.initialize())
app.use(passport.session())
if (ENV === 'dev') {
    app.use(morgan('dev'))
}


/*
*   Main Routes
*/
app.use('/api/v1', require('./routes'))


/*
*   Express Server initialization
*/
app.listen(PORT, () => console.log(`Server running in ${ENV} mode on port ${PORT}`))


module.exports = app