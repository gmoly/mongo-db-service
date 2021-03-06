'use strict';
module.exports = function(app) {
  var trip = require('../controllers/tripsController');

  app.route('/trip')
    .get(trip.get_trips)
    .post(trip.create_trip);

  app.route('/last-trips/:count')
    .get(trip.get_last_trips)

  app.route('/trip/:tripId')
    .get(trip.get_trip)
    .put(trip.update_trip)
    .delete(trip.delete_trip);
};