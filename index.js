const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet')
const morgan = require('morgan')
const config = require('./config')
const routes = require('./routes')

const app = express()

// MongoDB config
mongoose.connect(config.mongo.url, config.mongo.config)
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to DB'));

// Express middlewares config
app.use(helmet())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
if (config.environment === 'dev') {
    app.use(morgan('dev'))
}

// Express main routes
app.use('/api/v1', routes)


// Express server initialization
app.listen(config.server.port, () => console.log(`Server running in ${config.environment} mode on port ${config.server.port}`))

module.exports = app
