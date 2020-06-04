var mongoose = require('mongoose');
var Schema = mongoose.Schema,
bcrypt = require('bcrypt'),


var UserSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  wemail: {
    type: String,
    required: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  wpassword: {
    type: String,
    required: true
  },
  wname: {
    type: String,
    required: true
  },
  wdob: {
    type: Date,
    required: true
  },
  wage: {
    type: Number,
    required: true
  },
  waddress: {
    type: String,
    required: true
  },
  wnearcity: {
    type: String,
    required: true
  },
  wstate: {
    type: String,
    required: true
  },
  wpincode: {
    type: Number,
    required: true
  },
  wmobile: {
    type: Number,
    required: true
  },
  woccupation: {
    type: String,
    required: true
  },
  wexperience: {
    type: Number,
    required: true
  },
  wskill: {
    type: String,
    required: true
  },
  wSecQue: {
    type: String,
    required: true
  },
  wSecAns: {
    type: String,
    required: true
  },
  wadhaar: {
    type: Number,
    required: true
  }
});
  module.exports = mongoose.model('user', UserSchema);


