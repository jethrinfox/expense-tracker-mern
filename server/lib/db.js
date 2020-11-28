const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_DB_URI, {
    // user: process.env.MONGO_USER,
    // pass: process.env.MONGO_PASSWORD,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to DB'));

module.exports = db;