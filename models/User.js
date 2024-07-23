const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    myName: {
        type: String,
        required: true,
    },
    mySID: {
        type: String,
        required: true,
    }
}, {
    collection: 's24students'
});

module.exports = mongoose.model('User',UserSchema);