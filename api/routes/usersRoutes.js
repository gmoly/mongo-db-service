'use strict';
module.exports = function(app) {
  var user = require('../controllers/usersController');

  app.route('/user')
    .post(user.create_user);

  app.route('/user/:userId')
    .get(user.get_user)
    .put(user.update_user)
};