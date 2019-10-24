'use strict';


var mongoose = require('mongoose'),
  User = mongoose.model('users');

exports.create_user = function(req, res) {
  console.log('create user '+req)
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.get_user = function(req, res) {
  User.findOne({ id: req.params.userId }, function (err, user) {
    if (err) res.send(err);
    if (user) {
      res.json(user);
    } else {
       res.json();
    }
  });
};


exports.update_user = function(req, res) {
  console.log('update user '+req)
    User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

