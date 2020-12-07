const mongoose = require('mongoose');

const mongoUri = process.env.NODE_ENV === "production" ? process.env.MONGO_URI : process.env.MONGO_URI2

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connection success'));

module.exports = db;