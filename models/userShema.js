const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    login: String,
    password: String,
    shared_secret: String,
    identity_secret: String,
    steamid: Number
})

const Account = mongoose.model('Account', userSchema);
module.exports = Account