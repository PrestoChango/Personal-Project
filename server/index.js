var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString = 'postgres://postgres:thisisatest@localhost/tesla'


var massiveInstance = massive.connectSync({connectionString: connectionString});
var app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());
app.set('db', massiveInstance);
app.use(express.static(__dirname + './../public'));
var db = app.get('db');
var chargers = require('./controllers/chargerCtrl.js');


app.get('/chargers', chargers.getChargeLocations);
app.get('/product', chargers.getAllProduct);
app.get('/customize/:id', chargers.customizeCar);
app.get('/changeWheel/:id', chargers.changeWheel);







var port = 3000;
app.listen(port, function() {
  console.log('listening on port: ' + port);
})
