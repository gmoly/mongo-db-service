var express = require('express'),
app = express(),
port = process.env.PORT || 3050;

mongoose = require('mongoose'),
Trip = require('./api/models/tripsModel'),
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.CONSTR, {useNewUrlParser: true}); 

Trip.watch().on('change', data => console.log(new Date(), data));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/tripsRoutes');
routes(app); 


app.listen(port);


console.log('Together RESTful API server started on: ' + port);