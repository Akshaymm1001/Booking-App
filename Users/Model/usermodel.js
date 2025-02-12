const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Email: {
        type: String,
        required: true,
        uniqued: true,
    },
    Name: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },
    PhnNum: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
