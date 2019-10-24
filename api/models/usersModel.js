'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    id: {
      type: String,
      required: 'User instagram id should be populated'
    },
    nick: {
        type: String,
        required: 'User nick should be populated'
    },
    name: {
        type: String,
        required: 'User name should be populated'
    },
    logo: {
        type: String,
        required: 'User logo should be populated'
    }
});


module.exports = mongoose.model('users', UserSchema)