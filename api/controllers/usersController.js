'use strict';


var mongoose = require('mongoose'),
  User = mongoose.model('users');

exports.create_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.get_user = function(req, res) {
  console.log("find_user")
  User.findOne({ id: req.params.userId }, function (err, user) {
    if (err) res.send(err);
    if (user) {
      res.json(user);
    } else {
       res.json();
    }
  });
};

exports.get_users = function(req, res) {
  User.find().where('id').in(req.body).exec(function (err, users) {
    if (err) res.send(err);
    if (users) {
      res.json(users);
    } else {
       res.json();
    }
  });
};


exports.update_user = function(req, res) {
    User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

