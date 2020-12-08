// Index.js

/*
*   Imports
*/
require('dotenv').config()
const express = require('express')
const helmet = require('helmet');
const cors = require('cors');
const hpp = require('hpp');
const morgan = require('morgan')
const mongoose = require('mongoose')
const session = require('express-session');
const passport = require('passport');
const rateLimit = require("express-rate-limit");
const MongoDBStore = require('connect-mongodb-session')(session)

/*
*   Config
*/
const app = express()
require('./lib/db')
require('./lib/passport')
const PORT = process.env.PORT || 8080
const ENV = process.env.NODE_ENV || 'development'
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 })
const store = new MongoDBStore({
    uri: process.env.MONGO_URI,
    collection: 'sessionsStore'
})
const sessionConfig = {
    name: "expense-tracker",
    secret: "superSecretToken",
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: true,
        httpOnly: false,
        maxAge: 1000 * 60 * 60 * 2
    }
}

/*
*   Middlewares
*/
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({
    origin: true, // <-- location of the react app were connecting to
    credentials: true,
}))
app.use(helmet())
app.use(session(sessionConfig))
app.use(hpp())
app.use(limiter)
app.use(passport.initialize())
app.use(passport.session())
if (ENV === 'devdevelopment') {
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