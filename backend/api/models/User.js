var encrypt = require('../utils/Encryption.js');
var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var productSchema = mongoose.model('Product').schema;

var userSchema = mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String
    },
    name: {
      type: String
    },
    cart: {
      type: [productSchema],
      default: []
    }
});
userSchema.set('autoIndex',false);
userSchema.plugin(passportLocalMongoose);

mongoose.model('User', userSchema);
