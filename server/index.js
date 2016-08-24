var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString = 'postgres://postgres:test@localhost/tesla'


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
app.get('/checkLogin', chargers.verifyLogin);
app.get('/getOrder/:id', chargers.getOrder);
app.get('/getCar', chargers.getCar);
app.get('/changeRoof/:id', chargers.changeRoof);
app.get('/changeLiner/:id', chargers.changeHeadliner);
app.get('/changeDecor/:id', chargers.changeDecor);
app.get('/changeSeats/:id', chargers.changeSeats);


app.post('/checkout', chargers.createOrder);
app.post('/createCustomer', chargers.createCustomer);





var port = 3000;
app.listen(port, function() {
  console.log('listening on port: ' + port);
})
