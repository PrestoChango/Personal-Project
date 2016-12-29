const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const connectionString = 'postgres://postgres@localhost/tesla'


const massiveInstance = massive.connectSync({connectionString: connectionString});
const app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());
app.set('db', massiveInstance);

app.use(express.static(__dirname + './../public'));

const chargers = require('./controllers/chargerCtrl.js');

app.get('/chargers', chargers.getChargeLocations);
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

const port = 3000;
app.listen(port, function() {
  console.log('listening on port: ' + port);
})
