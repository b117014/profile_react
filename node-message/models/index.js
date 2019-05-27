const mongoose  =  require('mongoose');
  mongoose.set('debug',true);
    mongoose.Promise = Promise;

    mongoose.connect('mongodb://localhost/profile');

    module.exports.Profile = require('./profile');