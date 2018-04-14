var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: false,
        trim: true,
        minLength: 1
    }
});

module.exports = {User};