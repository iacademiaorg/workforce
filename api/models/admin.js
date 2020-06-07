const mongoose = require('mongoose');
var AdminSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    AdminEMail:{
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    AdminPassword:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('admin',AdminSchema);