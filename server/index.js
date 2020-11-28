// Index.js

/*
* Imports
*/
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet')
const morgan = require('morgan')
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo')(session);

/*
*   Config
*/
const app = express()
require('./lib/db')
require('./lib/passport')


/*
*   Config
*/
const PORT = process.env.PORT || 8080
const ENV = process.env.NODE_ENV || 'dev'


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