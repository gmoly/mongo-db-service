'use strict';


var mongoose = require('mongoose'),
  Trip = mongoose.model('Trip');

exports.get_trips = function(req, res) {
    Trip.find({}, function(err, trip) {
    if (err)
      res.send(err);
    res.json(trip);
  });
};

exports.get_last_trips = function(req, res) {
    Trip.find({}).sort([['date', -1]]).limit(parseInt(req.params.count)).exec(function(err, trips) {
        if (err)
          res.send(err);
        res.json(trips);
      });
  };

exports.create_trip = function(req, res) {
  var new_trip = new Trip(req.body);
  new_trip.save(function(err, trip) {
    if (err)
      res.send(err);
    res.json(trip);
  });
};


exports.get_trip = function(req, res) {
    Trip.findById(req.params.tripId, function(err, trip) {
    if (err)
      res.send(err);
    res.json(trip);
  });
};


exports.update_trip = function(req, res) {
    Trip.findOneAndUpdate({_id: req.params.tripId}, req.body, {new: true}, function(err, trip) {
    if (err)
      res.send(err);
    res.json(trip);
  });
};


exports.delete_trip = function(req, res) {
    Trip.remove({
    _id: req.params.tripId
  }, function(err, trip) {
    if (err)
      res.send(err);
    res.json({ message: 'Trip successfully deleted' });
  });
};