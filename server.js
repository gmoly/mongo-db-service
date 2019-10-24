var express = require('express');
var cors = require('cors');
var update = require('./api/elasticsearch/update.js');
var search = require('./api/elasticsearch/search.js');

app = express();
port = process.env.PORT || 3050;

mongoose = require('mongoose'),
Trip = require('./api/models/tripsModel'),
User = require('./api/models/usersModel'),
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://trips:qwerty1@cluster0-egoc3.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true}); 

Trip.watch().on('change', data => update(data))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.all('/trips/_search', (req, res, body) => search(req, res, req.body));

var tripsRoutes = require('./api/routes/tripsRoutes');
var usersRoutes = require('./api/routes/usersRoutes');
tripsRoutes(app);
usersRoutes(app); 

app.listen(port);

console.log('Together RESTful API server started on: ' + port);